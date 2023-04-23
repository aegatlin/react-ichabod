#!/usr/bin/env node

const fs = require("node:fs");
const process = require("node:process");
const path = require("node:path");

const mapping = {
  button: "Button.tsx",
  card: "Card.tsx",
  link: "Link.tsx",
};

const args = {
  component: process.argv[2],
  toPathDir: process.argv[3],
};

if (!args.component || !args.toPathDir) {
  console.error("componentArg and toPathDirArg required");
  console.error("example: npx eject button src/components");
  process.exit(1);
}

const component = mapping[args.component];

if (!component) {
  console.error(`component arg not supported: ${args.component}`);
  console.error(`supported args are: ${Object.keys(mapping)}`);
  process.exit(1);
}

const ichabod = {
  path: {
    // __dirname is <root>/bin
    // __dirname/.. is <root>
    // __dirname/../src/components is <root>/src/components
    component(component) {
      return path.resolve(__dirname, "../src/components", component);
    },
  },
};

const repo = {
  path: {
    component(component) {
      return path.resolve(process.cwd(), args.toPathDir, component);
    },
  },
};

const fromPath = ichabod.path.component(component);
const toPath = repo.path.component(component);
const content = fs.readFileSync(fromPath);

console.log(`

ejecting...

from: ${fromPath}

content:

${content}

to: ${toPath}

`);

fs.writeFileSync(toPath, content);
