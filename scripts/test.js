#!/usr/bin/env node
"use strict";

const { convert } = require("../out/converter");

let pass = 0;
let fail = 0;

function assert(config, input, expected) {
  const got = convert(config, input);
  if (got === expected) {
    pass++;
    console.log(`  ✓ ${config.padEnd(6)} ${input} → ${got}`);
  } else {
    fail++;
    console.log(`  ✗ ${config.padEnd(6)} ${input} → ${got} (expected: ${expected})`);
  }
}

console.log("==> Running tests ...");

// Test data
const ZHS = "OpenCC 字典翻译。支持简、繁、港、台、日转换，以及术语转换（硬盘、屏幕、内存、闪存）。";
const ZHT = "OpenCC 字典翻譯。支持簡、繁、港、臺、日轉換，以及術語轉換（硬盤、屏幕、內存、閃存）。";
const TWP = "OpenCC 字典翻譯。支援簡、繁、港、臺、日轉換，以及術語轉換（硬碟、螢幕、記憶體、快閃記憶體）。";
const T2S = "OpenCC 字典翻译。支援简、繁、港、台、日转换，以及术语转换（硬碟、萤幕、记忆体、快闪记忆体）。";

// -- Simplified ↔ Traditional (character-level) --
assert("s2t", ZHS, ZHT);
assert("t2s", TWP, T2S);

// -- Simplified ↔ Taiwan (character-level, no phrase substitution) --
assert("s2tw", ZHS, ZHT);
assert("tw2s", TWP, T2S);

// -- Simplified ↔ Taiwan (phrase-level, includes regional vocabulary) --
assert("s2twp", ZHS, TWP);
assert("tw2sp", TWP, ZHS);

// -- Exclusion: "核心" must not become "內核" (TWPhrasesRev fix) --
assert("tw2sp", "核心", "核心");
assert("tw2sp", "多核心架構", "多核心架构");
assert("tw2sp", "核心技術", "核心技术");

// -- "內核" (kernel) is a distinct word and must convert normally --
assert("tw2sp", "內核", "内核");
assert("tw2sp", "Linux 內核", "Linux 内核");
assert("tw2sp", "宏內核", "宏内核");
assert("s2twp", "宏内核", "單核心");

// -- "什麼" / "甚麼" phrase shields (TWVariantsRevPhrases prevents 么→幺) --
assert("tw2sp", "什麼", "什么");
assert("tw2sp", "為什麼", "为什么");
assert("tw2sp", "沒什麼", "没什么");
assert("tw2sp", "甚麼", "甚么");
assert("s2twp", "什么", "什麼");
assert("s2twp", "为什么", "為什麼");

// -- Edge cases --
assert("s2t", "", "");
assert("s2t", "Hello World", "Hello World");
assert("s2t", "123!@#", "123!@#");
assert("s2t", "简体 ABC 繁体", "簡體 ABC 繁體");

console.log();
console.log(`==> ${pass} passed, ${fail} failed`);
process.exit(fail > 0 ? 1 : 0);
