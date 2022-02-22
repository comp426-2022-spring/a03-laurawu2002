/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  return (Math.floor(Math.random() * 2) == 0) ? "heads" : "tails";
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  const results = [];
  for(let i = 0; i < flips; i++) {
    results[i] = coinFlip();
  }
  return results;
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
  let tails = 0;
  let heads = 0;
  for(let i = 0; i < array.length; i ++) {
    if(array[i] == "heads") {
      heads++;
    }
    else if(array[i] == "tails") {
      tails++;
    }
  }
  if(heads == 0) {
    return {tails: tails};
  }
  if(tails == 0) {
    return {heads: heads};
  }
  else {
    return {heads: heads, tails: tails};
  }
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
  var side = coinFlip();
  var result;
  if(call == side) {
    result = "win";
  }
  else {
    result = "lose";
  }
  return {call: call, flip: side, result: result};
}


/** Export 
 * 
 * Export all of your named functions
*/
export { coinFlip, coinFlips, countFlips, flipACoin};