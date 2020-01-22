# Test Runner

Custom Test Runner for JavaScript

## Usage
```
const testRunner = require('test-runner');

// Test Cases and Execution
let reverseStringUseCases = [{
    input: "string",
    expected: "gnirts"
}, {
    input: "hi",
    expected: "ih"
}];
testRunner("Reverse String", reverseString, reverseStringUseCases);
```