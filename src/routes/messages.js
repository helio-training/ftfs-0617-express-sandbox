import { Router } from 'express'

const routes = new Router()

routes.route('/messages')
  .get((req, res) => {
    return res.json({
      message: 'Wowsers'
    })
  })
  .post((req, res) => {
    const body = req.body || {};
    console.log(body)

    if(!body.message) {
      return res.status(400).json({ message: 'Bad request', errorCode: 400 })
    }

    return res.json(body)
  })



export default routes
