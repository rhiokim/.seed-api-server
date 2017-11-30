// @flow
import express from 'express'

const router = express.Router()

router.route('/').get((req: express$Request, res: express$Response, next: express$NextFunction) => {
  res.send('success')
})

router.get('/:id', (req: express$Request, res: express$Response) => {
  res.json(req.params)
})

module.exports = router
