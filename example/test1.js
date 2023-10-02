const fs = require('fs');
const { yaml2html } = require('../dist/github-formschema-converter');

console.log(yaml2html(fs.readFileSync(__dirname + '\\yaml\\test1.yaml')));

console.log(yaml2html(fs.readFileSync(__dirname + '\\yaml\\test1.yaml'))[0]);