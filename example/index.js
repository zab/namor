const http = require('http')
const namor = require('namor')

const server = http.createServer((req, res) => {
  const payload = JSON.stringify({
    words: 2,
    numbers: 2,
    manly: true,
    generated_name: namor.generate({
      words: 2,
      numbers: 2,
      manly: true
    })
  }, null, 2)

  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Content-Length', Buffer.byteLength(payload))

  res.end(payload)
})

const port = process.env.PORT || 8080
const host = process.env.HOST || '0.0.0.0'

server.listen(port, host, () => {
  console.log(`=> running at http://${host}:${port}`)
})
