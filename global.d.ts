// This file adds p5 instanced intellisence.
// I've commented out the global flavor of
// intellisense to reduce confusion.
// import * as p5Global from "p5/global";
import module = require("p5");
export = module;
export as namespace p5;
