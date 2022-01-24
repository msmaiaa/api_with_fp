import { RequestHandler } from 'express'

const update: RequestHandler = async (req, res) => {
  return res.status(200).json({ message: 'ok' })
}

export { update }
