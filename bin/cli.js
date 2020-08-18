#!/usr/bin/env node

const clean = require("../lib/clean.js");
const extract = require("../lib/extract.js");
const open = require("../lib/open.js");
const setup = require("../lib/setup.js");
const update = require("../lib/update.js");

const [, , ...args] = process.argv;

switch (args[0]) {
  case "clean":
    clean();
    break;
  case "extract":
    extract();
    break;
  case "open":
    open();
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
