#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

/*
## Example

The following assumes `src/components` is in the user repo
and that they have already installed `npm i react-ichabod`.

`npx ichabod eject button src/components`

## Lazy testing

`npm run build`
`node dist/eject.cjs ichabod eject
*/

const mapping: { [key: string]: string } = {
  button: "Button.tsx",
  card: "Card.tsx",
  link: "Link.tsx",
};

const args = {
  // ichabod is unused. It's purpose is namespacing, since `eject` likely
  // conflicts with other libraries.
  ichabod: process.argv[2],
  eject: process.argv[3],
  component: process.argv[4],
  toPathDir: process.argv[5],
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
    component(component: string) {
      return path.resolve(__dirname, "../src/components", component);
    },
  },
};

const repo = {
  path: {
    component(component: string) {
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
