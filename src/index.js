import Express from 'express'
import Parser from 'body-parser'

import Routes from './routes'

const PORT = 3333
const app = Express()

app.use(Parser.json())
app.use(Parser.text())
app.use('/', Routes.messages)

// http://localhost:3333/
app.get('/', (req, resp) => {
  return resp.json({
    message: 'Hello World',
  })
})


app.listen(PORT, err => {
  if (err) console.error(err)

  console.log(`Server has started on http://localhost:${PORT}`)
})
