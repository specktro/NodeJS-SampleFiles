import {getPokemonById} from "./js-foundation/06-promises";

getPokemonById(10)
.then(pokemon => console.log(pokemon))
.catch(error => console.log(error))
.finally(() => console.log('Finished pokemon call'))