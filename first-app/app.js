const EventEmitter = require('node:events');
const emitter = new EventEmitter()

// Register a listener 
emitter.on('messageLogged', ({ id, url }) => {
  console.log('Listener called', id, url)
})

// Raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://' })

// Raise: logging (data: message)
