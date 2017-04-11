//@flow
const http = require('http')
const express = require('express')
const path = require('path')
const displayRoutes = require('express-routemap')

const app: express$Application = express()
const PORT: number = Number(process.env.PORT) || 8082

const routeSample = require('./routes/sample.route')

app.use('/sample', routeSample)

app.get('/', (req: express$Request, res: express$Response): void => {
  res.send('Hi World, I\'m seed-api-server')
})

http.createServer(app).listen(PORT, () => {
  displayRoutes(app)
})
