const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const config = require('./../src/config');

module.exports = {
  customHTML() {
    // console.log(config)
    let indexPath = path.join(__dirname, '../', 'dist/index.html');

    const { googleAnalytics, seo = {} } = config || {};
    const { title = '', description = '', keyword = [] } = seo;

    if( typeof googleAnalytics === 'string' && googleAnalytics ) {
      if( fs.existsSync(indexPath) === true ) {
        let indexHtml = fs.readFileSync(indexPath, {encoding: 'utf-8'}) || '';
        const $ = cheerio.load(indexHtml);
        const $head = $('head').eq(0);
        const $title = $head.find('title');
        // add google analytics
        $head.append(googleAnalytics);

        // add seo
        $title.text(title);
        $title.after(`<meta name="description" content="${description}" />`);
        if( Array.isArray(keyword) ) {
          $title.after(`<meta name="keyword" content="${keyword.join(',')}" />`)
        }
        let resultIndexHtml = $.html();
        // resultIndexHtml = resultIndexHtml.replace(/[\r\n]/g, '');
        fs.writeFileSync(indexPath, resultIndexHtml, {encoding: 'utf-8'})
      }
    }
  }
}
