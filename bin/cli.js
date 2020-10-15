#!/usr/bin/env node

import clean from "../lib/clean.js";
import extract from "../lib/extract.js";
import setup from "../lib/setup.js";
import update from "../lib/update.js";

const [, , ...args] = process.argv;

switch (args[0]) {
  case "clean":
    clean();
    break;
  case "extract":
    extract();
    break;
  case "setup":
    setup();
    break;
  case "update":
    update();
    break;
  default:
    console.log(`Hello World ${args}`);
}
