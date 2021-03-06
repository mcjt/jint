/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-144-1.js
 * @description Object.defineProperty - 'Attributes' is the Math object that uses Object's [[Get]] method to access the 'value' property of prototype object  (8.10.5 step 5.a)
 */


function testcase() {
        var obj = {};

        try {
            Object.prototype.value = "Math";

            Object.defineProperty(obj, "property", Math);

            return obj.property === "Math";
        } finally {
            delete Object.prototype.value;
        }
    }
runTestCase(testcase);
