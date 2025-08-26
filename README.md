# peaka-api-mcp-server

Model Context Protocol (MCP) is a [new, standardized protocol](https://modelcontextprotocol.io/introduction) for managing context between large language models (LLMs) and external systems.

Model Context Protocol (MCP) server that provides access to Peaka's API endpoints for programmatic interaction.

This server enables LLMs to access Peaka's API endpoints for programmatic interaction with your data platform.

## Requirements

- You'll need a Peaka Partner API key while using endpoints from this server. Check out the [Peaka Documentation](https://docs.peaka.com/how-to-guides/how-to-manage-partner-api-key#how-to-manage-your-partner-api) for detailed instructions on creating and managing your API key.

## Usage with Claude Desktop

- Edit the configuration file `config.json`:
  - on macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
  - on Windows: `%APPDATA%\Claude\claude_desktop_config.json`
- Add the following configuration to the `mcpServers` object:

```json
{
  "mcpServers": {
    "peaka-api": {
      "command": "npx",
      "args": ["-y", "@peaka/mcp-server-peaka-api@latest"]
    }
  }
}
```

- Restart Claude Desktop

## Usage with Cursor

- Edit the configuration file `mcp.json`:
  - on macOS: `~/.cursor/mcp.json`
  - on Windows: `%USERPROFILE%\.cursor\mcp.json`
- Add the following configuration to the `mcpServers` object:

```json
{
  "mcpServers": {
    "peaka-api": {
      "command": "npx",
      "args": ["-y", "@peaka/mcp-server-peaka-api@latest"]
    }
  }
}
```

- Enable MCP Server

## Contact

For feature requests and bugs, please create an issue in this repo. For further support, see the following resources:

- [Peaka Community Discord](https://discord.com/invite/peaka)
