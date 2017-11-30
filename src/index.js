// @flow
import app from './app'
import displayRoutes from 'express-routemap'

const PORT = process.env.PORT || 8082

app.listen(PORT, () => {
  displayRoutes(app)
})
