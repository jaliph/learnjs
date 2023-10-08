/**
 * https://leetcode.com/problems/promise-time-limit/
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      const id = setTimeout(() => reject("Time Limit Exceeded"), t)
      fn(...args)
        .then((d) => resolve(d))
        .catch((err) => reject(err))
        .finally(() => clearTimeout(id))
    })
  }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */