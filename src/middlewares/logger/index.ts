import morgan from 'morgan'

const loggerParams = ':method :url :status :res[content-length] - :response-time ms'

export { morgan as logger, loggerParams }
