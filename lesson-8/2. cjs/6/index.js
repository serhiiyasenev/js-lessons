const localization = require('./localization');
const fs = require('fs');

const xml = fs.readFileSync('./localizationXml.xml', 'utf-8');
console.log(xml);

console.log("");

console.log(typeof localization);
console.log(localization);
console.log(localization.uk);
console.log(localization.ru);
console.log(localization.en);