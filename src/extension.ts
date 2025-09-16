import * as vscode from 'vscode';
import { buildPrompt } from './promptBuilder';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "y7-local-commenter" is now active!');

	const generateCommentCommand = vscode.commands.registerCommand('y7-local-commenter.generateComment', async () => {
		vscode.window.showInformationMessage('Generation code comment, please wait ... !');

		const editor = vscode.window.activeTextEditor;

		if (editor === undefined) {
			vscode.window.showErrorMessage('Failed to retrieve editor');
			return;
		}

		const prompt = await buildPrompt(editor);
		console.log('prompt', prompt);

		if (prompt === undefined ) {
			vscode.window.showErrorMessage('Failed to generate prompt');
			return;
		}
	});

	context.subscriptions.push(generateCommentCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
