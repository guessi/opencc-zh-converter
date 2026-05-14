# Contributing

## Setup

```bash
npm install
npm run vscode:prepublish
```

## Development

```bash
npm run compile   # recompile TypeScript (skip dict rebuild)
npm test
npm run lint
```

## Release

1. Bump `version` in `package.json` (patch for fixes/dict updates, minor for new features)
2. Update `CHANGELOG.md`
3. Commit, tag, and push:

```bash
git add package.json CHANGELOG.md
git commit -m "Release v<version>"
git tag v<version>
git push origin main --tags
```

CI creates the GitHub Release with the `.vsix` attached.
