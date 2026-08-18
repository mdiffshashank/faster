# Figma MCP Setup (Team)

This project includes a shared VS Code MCP server config in `.vscode/mcp.json`.

## What Is Shared

- `.vscode/mcp.json` is committed and shared with the repository.
- `.env.example` is committed as a template.
- `.env.local` is gitignored and must be created by each developer.

## One-Time Setup After Clone

1. Install dependencies used by the MCP command:

npm install

2. Create local env file:

cp .env.example .env.local

3. Edit `.env.local` and set your own key:

FIGMA_API_KEY=your_real_figma_key

4. Reload VS Code window.

5. Start MCP from terminal (optional verification):

npm run mcp:figma -- --help

## Security Rules

- Never commit `.env.local`.
- Never put API keys in `.vscode/mcp.json`.
- Rotate keys if accidentally exposed.
