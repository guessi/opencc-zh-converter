type Dict = [string, string][];

interface TrieNode {
  children: Map<string, TrieNode>;
  value?: string;
}

// -- Step 1: Define conversion configs --

const S2T = ["STPhrases", "STCharacters"];
const T2S = ["TSPhrases", "TSCharacters"];
const TW = ["TWVariants"];
const TW_REV = ["TWVariantsRevPhrases", "TWVariantsRev"];
const TWP = ["TWPhrases"];
const TWP_REV = ["TWPhrasesRev", "TWVariantsRevPhrases", "TWVariantsRev"];

const CONFIGS: Record<string, string[][]> = {
  s2t: [S2T],
  t2s: [T2S],
  s2tw: [S2T, TW],
  tw2s: [TW_REV, T2S],
  s2twp: [S2T, TWP, TW],
  tw2sp: [TWP_REV, T2S],
};

// -- Step 2: Load and merge dictionary files --

declare function require(id: string): { default: Dict };

function mergeDicts(names: string[]): Dict {
  const seen = new Map<string, string>();
  for (const name of names) {
    for (const [k, v] of require(`./dict/${name}`).default) {
      if (!seen.has(k)) {
        seen.set(k, v);
      }
    }
  }
  return Array.from(seen.entries());
}

// -- Step 3: Build a lookup tree from dictionary entries --

function buildTrie(entries: Dict): TrieNode {
  const root: TrieNode = { children: new Map() };
  for (const [key, val] of entries) {
    let node = root;
    for (const ch of key) {
      let child = node.children.get(ch);
      if (!child) {
        child = { children: new Map() };
        node.children.set(ch, child);
      }
      node = child;
    }
    node.value = val;
  }
  return root;
}

// -- Step 4: Replace text using the lookup tree (longest match wins) --

function applyTrie(trie: TrieNode, input: string): string {
  const output: string[] = [];
  const chars = Array.from(input);
  let i = 0;

  while (i < chars.length) {
    let node = trie;
    let match: { value: string; end: number } | undefined;

    for (let j = i; j < chars.length; j++) {
      const child = node.children.get(chars[j]);
      if (!child) {
        break;
      }
      node = child;
      if (node.value !== undefined) {
        match = { value: node.value, end: j + 1 };
      }
    }

    if (match) {
      output.push(match.value);
      i = match.end;
    } else {
      output.push(chars[i]);
      i++;
    }
  }

  return output.join("");
}

// -- Step 5: Put it all together --

const trieCache = new Map<string, TrieNode[]>();

export function convert(config: string, input: string): string {
  if (!trieCache.has(config)) {
    const steps = CONFIGS[config];
    if (!steps) {
      throw new Error(`Unknown config: ${config}`);
    }
    trieCache.set(
      config,
      steps.map((names) => buildTrie(mergeDicts(names))),
    );
  }

  let result = input;
  for (const trie of trieCache.get(config)!) {
    result = applyTrie(trie, result);
  }
  return result;
}
