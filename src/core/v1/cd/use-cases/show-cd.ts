import { RequestHandler } from 'express'

const show: RequestHandler = async (req, res) => {
  return res.status(200).json({ message: 'ok' })
}

export { show }
