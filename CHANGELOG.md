# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.5] - 2026-09-01

### Changed

- Update dictionary data to [OpenCC 1.4.2](https://github.com/BYVoid/OpenCC/releases/tag/ver.1.4.2)
- Update dev dependencies (eslint, prettier, typescript-eslint)

## [1.0.4] - 2026-07-16

### Changed

- Update dictionary data to [OpenCC 1.4.1](https://github.com/BYVoid/OpenCC/releases/tag/ver.1.4.1)
- Update dev dependencies (eslint, markdownlint-cli, typescript-eslint)

## [1.0.3] - 2026-07-11

### Changed

- Update dictionary data to [OpenCC 1.4.0](https://github.com/BYVoid/OpenCC/releases/tag/ver.1.4.0)
- Update dev dependencies (eslint, prettier, typescript-eslint, markdownlint-cli)
- Fix incorrect VS Code version requirement in README

## [1.0.2] - 2026-06-10

### Changed

- Lower minimum VS Code engine requirement from `1.120.0` to `1.102.0` for broader editor compatibility
- Update dev dependencies (eslint, prettier, typescript-eslint) and fix brace-expansion vulnerability

## [1.0.1] - 2026-05-14

### Changed

- Update dictionary data to [OpenCC 1.3.1](https://github.com/BYVoid/OpenCC/releases/tag/ver.1.3.1)

## [1.0.0] - 2026-04-23

### Added

- Initial release
- Simplified Chinese ↔ Traditional Chinese conversion with phrase support
- Dictionary data based on [OpenCC 1.3.0](https://github.com/BYVoid/OpenCC/releases/tag/ver.1.3.0)
- Pure JavaScript implementation using OpenCC dictionary data
- Zero runtime dependencies

### Fixed

- Exclude incorrect TWPhrasesRev mapping "核心→內核" — "核心" (core) is not "內核" (kernel)

[unreleased]: https://github.com/guessi/opencc-zh-converter/compare/v1.0.5...HEAD
[1.0.5]: https://github.com/guessi/opencc-zh-converter/releases/tag/v1.0.5
[1.0.4]: https://github.com/guessi/opencc-zh-converter/releases/tag/v1.0.4
[1.0.3]: https://github.com/guessi/opencc-zh-converter/releases/tag/v1.0.3
[1.0.2]: https://github.com/guessi/opencc-zh-converter/releases/tag/v1.0.2
[1.0.1]: https://github.com/guessi/opencc-zh-converter/releases/tag/v1.0.1
[1.0.0]: https://github.com/guessi/opencc-zh-converter/releases/tag/v1.0.0
