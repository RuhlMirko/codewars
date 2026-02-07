// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
import { john, peter } from "./04-names";
import sayHi from "./05-utils";
import data from "./06-alternative-flavor";
import "./07-mind-grenade";
sayHi("susan");
sayHi(john);
sayHi(peter);
