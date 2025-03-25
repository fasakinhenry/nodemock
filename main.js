const Logger = require('./logger2.js');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', function (args) {
  console.log('Listener called', args);
});

logger.log('message');
