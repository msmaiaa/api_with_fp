import { SignJWT, JWTPayload, jwtVerify, JWTVerifyResult } from 'jose'
import config from '@/config'
import { AuthError, ValidationError } from '@/helpers/errors'

const JWT_SECRET = config.jwtSecret as string

if (JWT_SECRET.length < 32) {
  throw new Error('JWT_SECRET must be at least 32 chars long')
}

export async function createJWT (
  payload: JWTPayload,
  expirationTime: string = '1h',
) {
  const secret = Buffer.from(JWT_SECRET)
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(expirationTime)
    .sign(secret)
}

export async function verifyJWT (token: string | undefined): Promise<JWTVerifyResult> {
  if (!token) throw new AuthError("You're not authorized")
  const secret = Buffer.from(JWT_SECRET)
  return jwtVerify(token, secret)
}

type Obj = {}
function isValidPayload (payload: Obj): payload is JWTPayload {
  return 'id' in payload
}

export async function verifyToken (token: string) {
  const { payload } = await verifyJWT(token)

  if (isValidPayload(payload)) {
    return payload
  }

  throw new ValidationError('Invalid payload. User ID is missing')
}
