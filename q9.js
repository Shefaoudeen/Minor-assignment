import { name } from "./external";
import { addTwoNumber } from "./external";
import dept from "./external2";

console.log(name);
console.log(addTwoNumber(5 + 10));
console.log(dept);

/*
Named Exports
>>Named exports allow you to export multiple variables or functions from a module. Each export has its own name.
>>You can export several items using their respective names, and you must import them using the exact names.
*/

/*
Default Exports
>>Default exports allow you to export a single value or function from a module. The exported item doesn’t have to have a specific name.
>>You can import a default export with any name you choose.
*/
