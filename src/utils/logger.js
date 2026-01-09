export const logger = (message, type) => {
  console.log(`[${new Date().toISOString()}] [${type}: ${message}]`);
};
