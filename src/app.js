const { buildLogger } = require('./plugins')

// getPokemonById(1)
// .then(pokemon => console.log(pokemon))
// .catch(error => console.log(error))
// .finally(() => console.log('Finished pokemon call'))

const logger = buildLogger('app.js')
logger.log('Hola mundo')
logger.error('This is an error')