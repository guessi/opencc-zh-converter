import * as vscode from "vscode";
import { convert } from "./converter";

const COMMANDS = [
  { command: "opencc-convert.s2t.phrase", config: "s2twp" },
  { command: "opencc-convert.t2s.phrase", config: "tw2sp" },
  { command: "opencc-convert.s2t", config: "s2t" },
  { command: "opencc-convert.t2s", config: "t2s" },
] as const;

function getFullDocumentRange(doc: vscode.TextDocument): vscode.Range {
  return new vscode.Range(0, 0, doc.lineCount, 0);
}

async function doConvert(textEditor: vscode.TextEditor, config: string) {
  const { document: doc, selection } = textEditor;
  const range = selection.isEmpty ? getFullDocumentRange(doc) : selection;
  const text = doc.getText(range);
  const result = convert(config, text);
  await textEditor.edit((builder) => builder.replace(range, result));
}

export function activate(context: vscode.ExtensionContext) {
  for (const { command, config } of COMMANDS) {
    context.subscriptions.push(
      vscode.commands.registerTextEditorCommand(command, (textEditor) => {
        doConvert(textEditor, config).catch((err) =>
          vscode.window.showErrorMessage(`OpenCC: ${err instanceof Error ? err.message : String(err)}`),
        );
      }),
    );
  }
}

export function deactivate() {
  // no-op
}
