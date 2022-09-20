const app = require('express')()
const port = 3000

app.get('/', (req, res) => res.send(`Server Listening at http://localhost:${port}`))

app.get('/stream', (req, res) => {
  res.setHeader("Content-Type", "text/event-stream")
  // res.write("data: " + "Stream!!\n\n")
  send(res)
})

let i = 0
const send = res => {
  res.write(`data: What zit tooya number ${i++} \n\n`)
  // setTimeout(() => send(res), 1000)
  setInterval(() => send(res), 1000)
}

app.listen(port)
console.log(`Server Listening at http://localhost:${port}`)