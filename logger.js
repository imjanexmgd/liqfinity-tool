import pino from 'pino';

const prettyOptions = {
  colorize: true,
  levelFirst: true,
  //   translateTime: 'HH:MM:ss',
  ignore: 'pid,hostname',
};

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: prettyOptions,
  },
});

export default logger;
