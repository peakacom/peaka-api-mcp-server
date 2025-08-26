#!/usr/bin/env node

import { FastMCP } from "fastmcp";
import * as fs from "node:fs";
import * as path from "node:path";
import * as url from "node:url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const api = fs.readFileSync(path.join(__dirname, "api.json"), "utf8");

// Create server instance
const server = new FastMCP({
  name: "Peaka API MCP Server",
  version: "1.0.0",
});

// Add tool to provide API documentation
server.addTool({
  name: "peaka_api",
  description:
    "Provides comprehensive Peaka API documentation and specifications from api.json (OpenAPI 3.0.1 specification). Contains complete endpoint definitions with base URLs, path templates, HTTP methods, authentication requirements, request/response schemas, and example usage. When working with endpoints, always check the specific endpoint documentation for the correct base URL as different endpoints may use different base URLs. Parse the OpenAPI specification to extract endpoint details, parameter schemas, and sample responses for accurate API integration.",
  execute: async () => {
    return {
      content: [
        {
          type: "text",
          text: api,
        },
      ],
    };
  },
});

// Start server
server.start({
  transportType: "stdio",
});
