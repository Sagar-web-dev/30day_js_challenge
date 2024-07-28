
// 1. Basic Module Script: Write a script that creates a module exporting a function and imports it in another script. 


import {remainder,muliplication} from './Basic Module_Feature1.mjs'


console.log("Remainder:",remainder(122,89))

console.log("Multiplication:",muliplication(32,31))

// 2. Named and Default Exports Script: Create a script demonstrating both named and default exports and their usage.

import obj from './Named and Default Exports_2feature.mjs'

console.log("Divaision",obj.divison(123,78))
console.log("Name and course",obj.Name+","+obj.course)
obj.getAddress()

