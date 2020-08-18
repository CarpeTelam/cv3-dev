#!/usr/bin/env node

const setup = require("../lib/setup.js");

const [, , ...args] = process.argv;

switch (args[0]) {
  case "clean":
    console.log("run clean");
    break;
  case "dev":
    console.log("run dev");
    break;
  case "extract":
    console.log("run extract");
    break;
  case "open":
    console.log("run open");
    break;
  case "setup":
    setup();
    break;
  case "update":
    console.log("run update");
    break;
  default:
    console.log(`Hello World ${args}`);
}
