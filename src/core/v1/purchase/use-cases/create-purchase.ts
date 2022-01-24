import { RequestHandler } from 'express'

const create: RequestHandler = async (req, res) => {
  return res.status(200).json({ message: 'ok' })
}

export { create }
