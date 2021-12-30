let _ = require('lodash')
import lodash, { fromPairs } from 'lodash'
// How to structure a project from the ground-up
// The first step in creating a clean architecture is breaking code into reusable and shareable pieces with 'import' and 'export'
// Tip: Isolate functionality with import / export
const validator = {
    message: 'is invalid,',
    setInvalidMessage: field => `${field} ${this.message}`
}
// Export if you want to share the code / function
export { validator };
// If you choose to export some functions and not others, you've basically created public and private methods!

// If we want to import any functions from other files:
import { getArtistByPreference } from '../externalData' // The path for this is RELATIVE to the file we are currently in

// You can also import entire classes as well as variables - depends on the use case
// Think about this when writing code. Add all fetch() api calls in a file and export those. Try to organize it

// If you want to keep all your imports as properties on an object, you simply import everything to a variable name
import * as utils from '../externalData'
// Type in utils. and see the results!

// You can also just add export to the beginning of each function declaration, and they are eligible to be exported!
export const testFunction = () => {
    console.log('test Hello World')
}

// Review 'default' function notes


// Next tip: Leverage Community Knowledge with npm (node package manager)
// npm init initializes a node project. This will result in a package.json file
// The package.json file contains the metadata (DEPENDENCIES) for the project
// The npm install command does a few things
    // 1. If there isn't a node_modules directory, the command will create one and copy down the package
    // 2. It updates your package-json file to include the version number of the code you're importin
    // 3. It will create a package-lock.json file that includes detailed information about the version of the installed code along with that package's dependent libraries

// Lodash -> A suite of tools for converting data
// Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
// Play with the functions a bit

// If you want to add an npm package, but it isn't necessary for the production build (like prettier), you could do that using the --save-dev key
// This still update the package.json file, but it places the package under a different key

// Component Architecture note:
// A component is the combination of all relevant code into a single directory
