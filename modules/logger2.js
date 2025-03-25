const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(message) {
    // Log a message to the console
    console.log(message);

    // Raise an event
    this.emit('messageLogged', { id: 1, url: 'https://' });
  }
}

module.exports = Logger;
