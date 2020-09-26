/**
 * generate random string
 *
 * @param {int} length
 * @param {string} initial hash value
 * @return {string}
 */
function randomString(len = 11, hash="") {
  hash += Math.random().toString('36').substr(0);
  hash = hash.replace('.', '');
  if(hash.length === len) {
    return hash;
  } else if(hash.length < len) {
    return randomString(len, hash)
  } else {
    return hash.substr(0, len);
  }
}



module.exports = {
  randomString
}
