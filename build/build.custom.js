const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const config = require('./../src/config');

module.exports = {
  customHTML() {
    // console.log(config)
    let indexPath = path.join(__dirname, '../', 'dist/index.html');

    const { googleAnalytics } = config || {};
    if( typeof googleAnalytics === 'string' && googleAnalytics ) {
      if( fs.existsSync(indexPath) === true ) {
        let indexHtml = fs.readFileSync(indexPath, {encoding: 'utf-8'}) || '';
        const $ = cheerio.load(indexHtml)
        $('head').eq(0).append(googleAnalytics);
        let resultIndexHtml = $.html();
        // resultIndexHtml = resultIndexHtml.replace(/[\r\n]/g, '');
        fs.writeFileSync(indexPath, resultIndexHtml)
      }
    }


  }
}
