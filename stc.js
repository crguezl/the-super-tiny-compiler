#!/usr/bin/env node
const fs = require('fs');
const {
        tokenizer,
        parser,
        traverser,
        transformer,
        codeGenerator,
        compiler,
      } = require("./the-super-tiny-compiler.js");

let input = null;
try {
    input = fs.readFileSync(process.argv[2]).toString();
} catch(e) {
     input = "(add 2 (subtract 4 2))";
}

let tokens = tokenizer(input);

console.log(tokens);

let ast    = parser(tokens);

console.log(JSON.stringify(ast, null, 2));

let newAst = transformer(ast);

console.log(JSON.stringify(newAst, null, 2));

let output = codeGenerator(newAst);

console.log(output);
