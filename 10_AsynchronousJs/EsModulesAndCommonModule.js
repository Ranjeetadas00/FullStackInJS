// CommonJS and ES Modules (ECMAScript Modules) are two distinct module systems used in JavaScript for organizing and reusing code.
// CommonJS (CJS)
// Primary Environment: Primarily used in Node.js for server-side development.
// Loading: Synchronous loading of modules, meaning a module must fully load before execution continues.
// Syntax: Uses require() for importing modules and module.exports or exports for exporting members.
// JavaScript

    // CommonJS export
    module.exports = {
      myFunction: () => console.log("Hello from CommonJS!")
    };

    // CommonJS import
    const { myFunction } = require('./myModule.js');
    myFunction();


// Dynamic Imports: Supports dynamic imports, where modules can be loaded conditionally at runtime.
// ES Modules (ESM)
// Primary Environment: Designed for both browser and server-side JavaScript (including Node.js).
// Loading: Asynchronous loading of modules, enabling non-blocking module loading.
// Syntax: Uses import for importing modules and export or export default for exporting members.
// JavaScript

    // ES Modules export
    export const myFunction = () => console.log("Hello from ES Modules!");

    // ES Modules import
    import { myFunction } from './myModule.mjs'; // .mjs extension or "type": "module" in package.json
    myFunction();


// Static Imports: Imports are static and parsed before execution, which allows for features like tree-shaking (removing unused code).
// Top-level Await: Supports top-level await for asynchronous operations at the module level.