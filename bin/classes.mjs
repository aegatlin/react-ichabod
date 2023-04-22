#!/usr/bin/env node

import { writeFileSync } from "node:fs";
import { classes, defaultThemes } from "../src/classes";

const theme = defaultThemes.prototype;

const out = `
export const classes = {
  button: "${classes.button(theme)}",
  card: "${classes.card(theme)}"
}
`;

writeFileSync("./classes.js", out);
