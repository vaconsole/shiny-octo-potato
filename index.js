const scrape = require('website-scraper')
const fs = require('fs')
var stringify = require('json-stringify-safe');
const SaveToExistingDirectoryPlugin = require('website-scraper-existing-directory');
const {urlTypeFilter} = require('./util')


const targetUrl = 'https://bbu.hk/'

const options = {
  urls: [targetUrl],
  urlFilter: (url)=>urlTypeFilter(url,targetUrl),
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
  plugins: [ new SaveToExistingDirectoryPlugin() ]
}

// with async/await
scrape(options).then((result) => {fs.writeFileSync('./site/index.json',stringify(result))
console.log('index json exported')
})

