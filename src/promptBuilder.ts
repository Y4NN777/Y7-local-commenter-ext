import * as vscode from 'vscode';

function getScriptContext(editor: vscode.TextEditor) {
    let document = editor.document;
    const codeContext = document.getText();
    return codeContext;
}

async function getCodeBlock(){
    const codeBlock = await vscode.env.clipboard.readText().then((text) => {
        return text;
    });

    return codeBlock;
}

function selectCommentSyntax(editor: vscode.TextEditor) {
    const languageId = editor.document.languageId;
    
    const commentMap: { [key: string]: string } = {
        'javascript': '//',
        'typescript': '//',
        'java': '//',
        'c': '//',
        'cpp': '//',
        'csharp': '//',
        'php': '//',
        'python': '#',
        'ruby': '#',
        'shell': '#',
        'yaml': '#',
        'html': '<!-- -->',
        'xml': '<!-- -->',
        'css': '/* */',
        'scss': '/* */',
    };
    
    return commentMap[languageId] || '#';
}

export async function buildPrompt(editor: vscode.TextEditor){
    const codeBlock = await getCodeBlock();
    const codeContext = getScriptContext(editor);
    const commentSyntax = selectCommentSyntax(editor);


    if (codeBlock === undefined || codeContext === undefined ){
        return;
    }


    let prompt = `
        complete code:
        "
        {CONTEXT}
        "
    
        Given the code below, write a brief  insightful comment that explains its purpose and functionality within the script. If applicable, mention any inputs expected in the code block.
        Keep the comment concise ( maximum 2 lines ). Wrap the comment with the appropriate comment syntax ({COMMENT-SYNTAX}). Avoid assumptions about the complete code and focus on the provided code block. Don't rewrite the code block

        code block:
        "
        {CODE-BLOCK}
        "
        `;

    prompt = prompt
        .replace('{CONTEXT}', codeContext)
        .replace('{CODE-BLOCK}', codeBlock)
        .replace('{COMMENT-SYNTAX}', commentSyntax);


    return prompt;
}
    