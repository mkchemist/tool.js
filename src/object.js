/**
 * object notation
 *
 * get item from object it it has a multi nested levels
 *
 * @param {object} container
 * @param {string} key
 * @return {mixed|Null}
 */
const notation = function (container, key) {

  let test = /\./gm;
  let matches = key.match(test);

  if(!matches) {
    if(container[key] !== undefined) {
      return container[key];
    }
    return null;
  }

  let parts = key.split('.');
  let root = container[parts[0]];

  if(root !== undefined) {
    parts.shift();
    let _joined = parts.join('.');
    return notation(root, _joined);
  }
  return null;
}

/**
 * flattening object and produce object with only one level
 *
 * @param {object} container
 * @param {string} _prefix
 * @param {object} result
 * @return {object} result
 */
const flattening = function (container = {}, _prefix = "", result = {}) {

  for(let i in container) {
    let val = container[i];
    if(typeof val !== "object" ) {
      result[_prefix+i] = val;
    } else {
      flattening(val, `${_prefix}${i}_`, result);
    }
  }
  return result;
};


module.exports = {
  notation,
  flattening
}
