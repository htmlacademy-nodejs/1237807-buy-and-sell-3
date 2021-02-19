"use strict";

const pino = require(`pino`);
const LOG_FILE = `./logs/api.log`;

const defaultLogLevel = process.env.IS_DEV_MODE ? `info` : `error`;

const logger = pino({
  name: `base-logger`,
  level: process.env.LOG_LEVEL || defaultLogLevel,
  prettyPrint: process.env.IS_DEV_MODE
}, process.env.IS_DEV_MODE ? process.stdout : pino.destination(LOG_FILE));

module.exports = {
  logger,
  getLogger(options = {}) {
    return logger.child(options);
  }
};
