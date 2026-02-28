# MCP Server Boilerplate

Production-ready starter templates for building [Model Context Protocol](https://modelcontextprotocol.io/) servers in **TypeScript** and **Python**.

Skip the boilerplate. Start building tools your AI agents can actually use.

## What's Included (Free)

### TypeScript Quickstart

```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "my-mcp-server",
  version: "1.0.0",
});

// Register a tool
server.tool("hello", { name: { type: "string" } }, async ({ name }) => ({
  content: [{ type: "text", text: `Hello, ${name}!` }],
}));

// Connect via stdio
const transport = new StdioServerTransport();
await server.connect(transport);
```

### Python Quickstart

```python
from mcp.server import Server
from mcp.server.stdio import stdio_server

app = Server("my-mcp-server")

@app.tool()
async def hello(name: str) -> str:
    """Say hello to someone."""
    return f"Hello, {name}!"

async def main():
    async with stdio_server() as (read, write):
        await app.run(read, write)
```

### Claude Desktop Configuration

```json
{
  "mcpServers": {
    "my-server": {
      "command": "npx",
      "args": ["tsx", "src/index.ts"]
    }
  }
}
```

## Project Structure

```
my-mcp-server/
â”œâ”€â”€ src/
â”‚   â””â”€â”€ index.ts          # Server entry point
â”œâ”€â”€ tools/
â”‚   â””â”€â”€ example.ts        # Tool definitions
â”œâ”€â”€ resources/
â”‚   â””â”€â”€ example.ts        # Resource providers
â”œâ”€â”€ package.json
â”œâ”€â”€ tsconfig.json
â””â”€â”€ claude_desktop_config.json
```

## Getting Started

1. Clone this repo
2. `npm install`
3. `npm run build`
4. Add to your Claude Desktop config
5. Start building tools

## Going Further

This free boilerplate gets you started. The **[MCP Server Boilerplate Kit](https://shellsage-ai.github.io/)** ($49) includes:

- âœ… Full TypeScript + Python dual-language templates
- âœ… Docker containerization with multi-stage builds
- âœ… CI/CD pipeline (GitHub Actions) for automated testing & deployment
- âœ… SSE (Server-Sent Events) transport for web deployments
- âœ… 15+ pre-built tool examples (file ops, API calls, database queries)
- âœ… Resource and prompt template patterns
- âœ… Error handling, logging, and retry patterns
- âœ… Testing framework with mock MCP client
- âœ… Production deployment guide (Docker, systemd, cloud)
- âœ… Claude Desktop + Cursor + Windsurf integration configs

**[Get the full kit â†’](https://shellsage-ai.github.io/)**

## Resources

- [MCP Specification](https://spec.modelcontextprotocol.io/)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk)
- [Claude Desktop MCP Docs](https://docs.anthropic.com/en/docs/build-with-claude/mcp)

## License

MIT â€” use this however you want.
