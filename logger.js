const url = 'https://mylogger.io/log';

function log(message) {
  // Send a message to the url
  console.log(message);
}

module.exports.log = log;
