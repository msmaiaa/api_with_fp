import { RequestHandler } from 'express'

const showAll: RequestHandler = async (req, res) => {
  return res.status(200).json({ message: 'ok' })
}

export { showAll }
