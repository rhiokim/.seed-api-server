//@flow
const express = require('express')
const router: express$Router = express.Router()

router.route('/')
  .get((req: express$Request, res: express$Response, next: Function): void => {
    res.send('success')
  })

router.get('/:id', (req: express$Request, res: express$Response): void => {
  res.json(req.params)
})

module.exports = router
