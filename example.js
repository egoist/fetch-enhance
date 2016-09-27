const fetch = require('node-fetch')
const fetchEnhance = require('./dist/fetch-enhance')(fetch)

fetchEnhance('http://www.zhihu.com/xxx')
  .catch(err => {
    console.log(err.stack)
  })
