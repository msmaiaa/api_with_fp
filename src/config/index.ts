import dotenv from 'dotenv'
const envFound = dotenv.config()

if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️")
}

export default {
  port: parseInt(process.env.PORT || '3333', 10),
  jwtSecret: process.env.JWT_SECRET,
  databaseUrl: process.env.DATABASE_URL,
  encryptionSalt: process.env.ENCRYPTION_SALT,
  apiVersion: 'v1',
}
