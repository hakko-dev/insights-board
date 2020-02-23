# insights-board

## vscode settings

prettier 설정 참고용입니다.

```
{
    "window.zoomLevel": 0,
    "editor.tabSize": 2,
    "editor.quickSuggestions": {
        "strings": true
    },
    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        "**/.idea": true,
        "**/.node_modules": true,
        "**/.vscode": true,
        "**/yarn.lock": true,
        "**/tmp": true,
        "**/.nuxt": true
    },
    "files.trimTrailingWhitespace": true,
    "files.autoSave": "onFocusChange",
    "editor.formatOnSave": true,
    "eslint.autoFixOnSave": true,
    "prettier.disableLanguages": [],
    "prettier.printWidth": 100,
    "prettier.singleQuote": true,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "explorer.confirmDragAndDrop": false,
    "workbench.colorTheme": "Dracula",
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
}
```