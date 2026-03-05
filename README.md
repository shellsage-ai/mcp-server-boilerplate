# MCP Server Boilerplate

<a href="https://glama.ai/mcp/servers/tdjg6t8sk8"><img width="380" height="200" src="https://glama.ai/mcp/servers/tdjg6t8sk8/badge" alt="MCP Server Boilerplate on Glama" /></a>

Production-ready starter templates for building [Model Context Protocol](https://modelcontextprotocol.io/) servers in **TypeScript** and **Python**.

Skip the boilerplate. Start building tools your AI agents can actually use.

## Server Capabilities

This boilerplate ships with working examples of all three MCP primitives:

### Tools

| Tool | Description | Parameters |
|------|-------------|------------|
| `echo` | Echo a message back to the caller | `message` (string, required) |
| `timestamp` | Get the current UTC timestamp | _(none)_ |

### Resources

| URI | Description | MIME Type |
|-----|-------------|-----------|
| `server://info` | Server metadata (name, version, available tools) | `application/json` |

### Prompts

No prompt templates are registered in the starter. The full kit includes prompt template patterns.

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
├── src/
│   └── index.ts          # Server entry point
├── tools/
│   └── example.ts        # Tool definitions
├── resources/
│   └── example.ts        # Resource providers
├── package.json
├── tsconfig.json
└── claude_desktop_config.json
```

## Getting Started

1. Clone this repo
2. `npm install`
3. `npm run build`
4. Add to your Claude Desktop config
5. Start building tools

## Going Further

This free boilerplate gets you started. The **[MCP Server Boilerplate Kit](https://shellsage-ai.github.io/)** ($49) includes:

- ✅ Full TypeScript + Python dual-language templates
- ✅ Docker containerization with multi-stage builds
- ✅ CI/CD pipeline (GitHub Actions) for automated testing & deployment
- ✅ SSE (Server-Sent Events) transport for web deployments
- ✅ 15+ pre-built tool examples (file ops, API calls, database queries)
- ✅ Resource and prompt template patterns
- ✅ Error handling, logging, and retry patterns
- ✅ Testing framework with mock MCP client
- ✅ Production deployment guide (Docker, systemd, cloud)
- ✅ Claude Desktop + Cursor + Windsurf integration configs

**[Get the full kit →](https://shellsage-ai.github.io/)**

## Resources

- [MCP Specification](https://spec.modelcontextprotocol.io/)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk)
- [Claude Desktop MCP Docs](https://docs.anthropic.com/en/docs/build-with-claude/mcp)
- [Glama MCP Directory](https://glama.ai/mcp/servers/tdjg6t8sk8)

## License

MIT — use this however you want.
