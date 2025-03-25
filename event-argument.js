const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('logging', (arg) => {
    
})


// Raise an event
emitter.emit('logging')
