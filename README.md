# peaka-mcp-api-server

Model Context Protocol (MCP) is a [new, standardized protocol](https://modelcontextprotocol.io/introduction) for managing context between large language models (LLMs) and external systems.

Model Context Protocol (MCP) server that provides access to Peaka's API endpoints for programmatic interaction.

This server enables LLMs to access Peaka's API endpoints for programmatic interaction with your data platform.

## Usage with Claude Desktop

- Edit the configuration file `config.json`:
  - on macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
  - on Windows: `%APPDATA%\Claude\claude_desktop_config.json`
- Add the following configuration to the `mcpServers` object:

```json
{
  "mcpServers": {
    "peaka": {
      "command": "npx",
      "args": ["-y", "@peaka/mcp-endpoint-server-peaka@latest"]
    }
  }
}
```

Change the `{PEAKA_API_KEY}` with your project API Key. Check out Peaka Documentation for creating your API Key and follow detailed instructions by clicking [here](https://docs.peaka.com/how-to-guides/how-to-manage-partner-api-key#how-to-manage-your-partner-api-).

- Restart Claude Desktop

## Usage with Cursor

- Edit the configuration file `mcp.json`:
  - on macOS: `~/.cursor/mcp.json`
  - on Windows: `%USERPROFILE%\.cursor\mcp.json`
- Add the following configuration to the `mcpServers` object:

```json
{
  "mcpServers": {
    "peaka": {
      "command": "npx",
      "args": ["-y", "@peaka/mcp-endpoint-server-peaka@latest"]
    }
  }
}
```

- Enable MCP Server

## Contact

For feature requests and bugs, please create an issue in this repo. For further support, see the following resources:

- [Peaka Community Discord](https://discord.com/invite/peaka)
