// import { getAge } from './plugins/get-age.plugin'
// import { buildLogger } from './plugins/logger.plugin'
// const { buildLogger } = require('./plugins')
import {getPokemonById} from "./js-foundation/06-promises";

// const age = getAge('1984-10-18')
// console.log(age)

getPokemonById(10)
.then(pokemon => console.log(pokemon))
.catch(error => console.log(error))
.finally(() => console.log('Finished pokemon call'))

// const logger = buildLogger('app.js')
// logger.log('Hola mundo')
// logger.error('This is an error')