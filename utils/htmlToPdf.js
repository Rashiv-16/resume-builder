const puppeteer = require("puppeteer");
const path = require('path');

let printPDF = async () => {
    const filePath = path.resolve('./public/resume.pdf')
    const fileUrl = 'https://rashiv-resume-builder.herokuapp.com/templates/1'
    // const fileUrl = 'http://127.0.0.1:3000/templates/1'
    const browser = await puppeteer.launch({ args: ['--no-sandbox'], headless: true});
    const page = await browser.newPage();
  try {
    await page.goto(fileUrl)
    await page.pdf({ format: 'A4' , path: filePath, printBackground: true});

    await page.close();
    await browser.close();
  }
  
  catch (error) {
    await page.close();
    await browser.close();
  }
}

module.exports = printPDF