<p align="center">
  <img src="https://raw.githubusercontent.com/guessi/opencc-zh-converter/refs/heads/main/assets/icon.png" width="128" height="128" alt="OpenCC 繁簡轉換">
</p>

# OpenCC 繁簡轉換

A cross-editor extension for converting between Simplified and Traditional Chinese. Works with VS Code and any editor that supports the VS Code extension API, using dictionary data from [OpenCC](https://github.com/BYVoid/OpenCC).

## Features

- Convert selected text or the entire file
- Simplified Chinese ↔ Traditional Chinese
- Fully offline, no network access required
- Zero runtime dependencies

## Installation

### Open VSX Registry

This extension is available on [Open VSX Registry](https://open-vsx.org/extension/guessi/opencc-zh-converter). Install it directly from the built-in extension marketplace in any editor that uses [Open VSX Registry](https://open-vsx.org/), with no manual download required and automatic updates.

### Manual install via `.vsix`

Download the latest `.vsix` from [GitHub Releases](https://github.com/guessi/opencc-zh-converter/releases),
then install it using the command for your editor:

- **VS Code:** `code --install-extension opencc-zh-converter-*.vsix`
- **VSCodium:** `codium --install-extension opencc-zh-converter-*.vsix`
- **Cursor:** `cursor --install-extension opencc-zh-converter-*.vsix`
- **Windsurf:** `windsurf --install-extension opencc-zh-converter-*.vsix`
- **Kiro:** `kiro --install-extension opencc-zh-converter-*.vsix`

Or use the Command Palette in any of these editors: `Cmd+Shift+P` → `Extensions: Install from VSIX...` → select the `.vsix` file.

> **Why Open VSX Registry?** [Open VSX Registry](https://open-vsx.org/) is an open alternative to the [VS Code Marketplace](https://marketplace.visualstudio.com/) that works across all VS Code-compatible editors. The [VS Code Marketplace](https://marketplace.visualstudio.com/) is restricted to Microsoft's official VS Code builds by its [Terms of Service](https://aka.ms/vsmarketplace-ToU), so [Open VSX Registry](https://open-vsx.org/) is the only way to reach users of these editors through a built-in marketplace.

## Usage

1. Select text in the editor (or leave empty to convert the entire file)
2. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
3. Search for `OpenCC` and select a conversion command

> **💡 Tip:** For most use cases, `s2tp` (Simplified → Taiwan Traditional) and `t2sp` (Taiwan Traditional → Simplified) are recommended, as they include Taiwan phrase-level conversion for the most natural results. Use `s2t` / `t2s` for character-level-only conversion without Taiwan-specific vocabulary.

## Commands

| Command | Description                                 | 中文說明                  |
| ------- | ------------------------------------------- | ------------------------- |
| `s2tp`  | Simplified → Traditional (Taiwanese Phrase) | 简体 → 繁體（含臺灣詞彙） |
| `t2sp`  | Traditional → Simplified (Taiwanese Phrase) | 繁體 → 简体（含台湾词汇） |
| `s2t`   | Simplified → Traditional (Character-level)  | 简体 → 繁體（僅逐字轉換） |
| `t2s`   | Traditional → Simplified (Character-level)  | 繁體 → 简体（仅逐字转换） |

All commands are grouped under the `OpenCC 繁簡轉換` category in the Command Palette.

## Requirements

- VS Code 1.74.0 or later, or any editor that supports the VS Code extension API

## Credits

- Dictionary data from [OpenCC](https://github.com/BYVoid/OpenCC) by BYVoid (Apache-2.0)
- Inspired by [vscode-zh-convertor](https://github.com/hongfanmeng/vscode-zh-convertor)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup and release instructions.

## License

[Apache-2.0](LICENSE)

## Why this extension?

All projects listed below are based on dictionary data from [OpenCC](https://github.com/BYVoid/OpenCC), but differ in scope, maintenance status, and design:

<details>
<summary>Comparison with other extensions</summary>

|                      | opencc-zh-converter                                           | vscode-chinese-translation | vscode-zh-convertor | simptradconv-openccjs |
| -------------------- | ------------------------------------------------------------- | -------------------------- | ------------------- | --------------------- |
| Maintenance Status   | Active                                                        | Unmaintained (2016)        | Unmaintained (2021) | Unmaintained (2023)   |
| Dictionary Data      | OpenCC (latest)                                               | node-opencc (2016)         | opencc-js (2022)    | opencc-js (2022)      |
| Runtime Dependencies | None                                                          | `node-opencc`              | `opencc-js`         | `opencc-js`           |
| `s2t` / `t2s`        | ✅                                                            | ✅                         | ✅                  | ✅                    |
| `s2tp` / `t2sp`      | ✅                                                            | ✅                         | ❌                  | ❌                    |
| Searchable in        | Any editor using [Open VSX Registry](https://open-vsx.org/) ¹ | VS Code only ²             | VS Code only ²      | VS Code only ²        |
| Offline              | ✅                                                            | ✅                         | ✅                  | ✅                    |
| License              | Apache-2.0                                                    | MIT                        | Not specified       | MIT                   |

¹ Published on [Open VSX Registry](https://open-vsx.org/), which is supported by all VS Code-compatible editors.
² Published on [VS Code Marketplace](https://marketplace.visualstudio.com/) only, which is restricted to Microsoft's official VS Code builds by its [Terms of Service](https://aka.ms/vsmarketplace-ToU). Other VS Code-compatible editors cannot access it.

</details>

Key reasons this extension was created:

- [vscode-chinese-translation](https://github.com/compulim/vscode-chinese-translation) has not been updated since March 2016, and depends on `node-opencc` (a C++ native addon) which requires native compilation and may not work in modern VS Code environments.
- [vscode-zh-convertor](https://github.com/hongfanmeng/vscode-zh-convertor) has not been updated since August 2021, only supports basic character-level conversion (no Taiwan phrase support), and depends on `opencc-js` as a runtime dependency.
- [simptradconv-openccjs](https://github.com/jaquesyang/vscode-extension-simptradconv-openccjs) has not been updated since July 2023, only supports basic character-level conversion (no Taiwan phrase support), and depends on `opencc-js` as a runtime dependency.
- [opencc-js](https://github.com/nk2028/opencc-js) is a general-purpose JavaScript library (not a VS Code extension). It depends on [opencc-data](https://github.com/nk2028/opencc-data) as its dictionary data source at runtime. Both projects' last commits were in November 2022, and they have open issues and pull requests with no maintainer response.
- This extension bundles OpenCC dictionary data directly at build time, resulting in zero runtime dependencies and a self-contained `.vsix` package.
