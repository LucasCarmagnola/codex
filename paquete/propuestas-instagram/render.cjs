// Render local design artifacts only; does not access external sites.
const { chromium } = require('C:/Users/Lucas/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const path = require('path');
const {pathToFileURL}=require('url');
(async()=>{const browser=await chromium.launch({headless:true,channel:'msedge'});const page=await browser.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:1});await page.goto(pathToFileURL(path.join(__dirname,'propuestas.html')).href);await page.evaluate(()=>document.fonts.ready);for(let n=1;n<=3;n++){await page.addStyleTag({content:'.toolbar,.tools{display:none}.gallery{display:block;padding:0}.sample{display:none}.sample:nth-child('+n+'){display:block}'});await page.locator('#post'+n).screenshot({path:path.join(__dirname,`0${n}-muestra.png`)});}await browser.close();})();

