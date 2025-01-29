"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { getAge } from './plugins/get-age.plugin'
// import { buildLogger } from './plugins/logger.plugin'
// const { buildLogger } = require('./plugins')
const _06_promises_1 = require("./js-foundation/06-promises");
// const age = getAge('1984-10-18')
// console.log(age)
(0, _06_promises_1.getPokemonById)(10)
    .then(pokemon => console.log(pokemon))
    .catch(error => console.log(error))
    .finally(() => console.log('Finished pokemon call'));
// const logger = buildLogger('app.js')
// logger.log('Hola mundo')
// logger.error('This is an error')
