#!/usr/bin/env node
const fs = require('fs');
const { parseVif } = require('../src/parser');

const args = process.argv.slice(2);
if (args.length === 0) {
    console.log("Usage: vif <filename>");
    process.exit(1);
}

const inputFile = args[0];
const vifCode = fs.readFileSync(inputFile, 'utf8');
const htmlOutput = parseVif(vifCode);

const outputFile = inputFile.replace('.vif', '.html');
fs.writeFileSync(outputFile, htmlOutput);

console.log(`Compiled ${inputFile} to ${outputFile}`);
