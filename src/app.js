// @flow
import express from 'express'
import pkg from '../package.json'

const app = express()
const routeSample = require('./routes/sample.route')

app.use('/sample', routeSample)

app.get('/', (req: express$Request, res: express$Response) => {
  res.send(`Hi World, I'm ${pkg.name}`)
})

export default app
