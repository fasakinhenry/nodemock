const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('logging', (args) => {
    console.log(args);
})


// Raise an event
emitter.emit('logging', {data: 'message'})
