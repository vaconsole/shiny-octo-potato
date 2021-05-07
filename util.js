const get_extension = require('get-url-extension')
const url = require('url')

function urlTypeFilter (inputUrl, targetUrl="https://google.com",{type =[".html",".xml",".htm"], sameDomain=true}={}) {

const sameDomainCheck = url.parse(inputUrl).hostname === url.parse(targetUrl).hostname
const inputUrlExtension = get_extension(url.parse(inputUrl).pathname) || '.html'
const extCheck = type.includes(inputUrlExtension)
// const sameDomainCheck = inputUrl.indexOf(targetUrl) === 0
if (sameDomain) {
  console.log(inputUrl,extCheck && sameDomainCheck)
  return extCheck && sameDomainCheck
}
return extCheck
}

module.exports = {
urlTypeFilter
}