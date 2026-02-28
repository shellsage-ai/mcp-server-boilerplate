import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "example-mcp-server",
  version: "1.0.0",
});

// Example tool: echo back a message
server.tool(
  "echo",
  "Echo a message back to the caller",
  { message: z.string().describe("Message to echo") },
  async ({ message }) => ({
    content: [{ type: "text", text: `Echo: ${message}` }],
  })
);

// Example tool: get current timestamp
server.tool(
  "timestamp",
  "Get the current UTC timestamp",
  {},
  async () => ({
    content: [{ type: "text", text: new Date().toISOString() }],
  })
);

// Example resource: server info
server.resource("info", "server://info", async (uri) => ({
  contents: [
    {
      uri: uri.href,
      mimeType: "application/json",
      text: JSON.stringify({
        name: "example-mcp-server",
        version: "1.0.0",
        tools: ["echo", "timestamp"],
      }),
    },
  ],
}));

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("MCP server running on stdio");
}

main().catch(console.error);