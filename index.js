const scrape = require('website-scraper')
const fs = require('fs')
var stringify = require('json-stringify-safe');
const SaveToExistingDirectoryPlugin = require('website-scraper-existing-directory');

const targetUrl = 'https://www.succulentsandsunshine.com'

const options = {
  urls: [targetUrl],
  urlFilter: function(url) {
    return url.indexOf(targetUrl) === 0;
  },
  request: {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19'
    }
  },
  recursive: true,
  maxRecursiveDepth: 10,
  filenameGenerator: 'bySiteStructure',
  directory: './site',
  ignoreErrors : true,
  requestConcurrency: 4,
  plugins: [ new SaveToExistingDirectoryPlugin() ]
}

// with async/await
scrape(options).then((result) => {fs.writeFileSync('./site/index.json',stringify(result))})

