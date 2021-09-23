const process = require('process');
const puppeteer = require('puppeteer');
console.log('process.env.CHROME_BIN:', process.env.CHROME_BIN);
process.env.CHROME_BIN = puppeteer.executablePath();
const tets = process.env.CHROME_BIN;
console.log('executablePath:', tets);

puppeteer.launch({ headless: false });