// @flow
import http from 'http'
import express from 'express'
import displayRoutes from 'express-routemap'

const app = express()
const PORT = process.env.PORT || 8082

const routeSample = require('./routes/sample.route')

app.use('/sample', routeSample)

app.get('/', (req: express$Request, res: express$Response) => {
  res.send("Hi World, I'm seed-api-server")
})

http.createServer(app).listen(PORT, () => {
  displayRoutes(app)
})
