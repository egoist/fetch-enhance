const fetchEnhance = require('../dist/fetch-enhance')

test('main', () => {
  return fetchEnhance('https://www.zhihu.com/xxx').catch(err => {
    expect(err.status).toBe(404)
    expect(err.message).toBe('Not Found')
    expect(err.data).toBeTruthy()
    return err.data.text()
  }).then(text => {
    expect(typeof text).toBe('string')
  })
})
