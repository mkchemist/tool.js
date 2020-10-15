/**
 * check if the given type is string
 * 
 * @param {mixed} v 
 * @return {boolean}
 */
const isString = v => "string" === typeof v;

/**
 * check if the given type is object
 * 
 * @param {mixed} v 
 * @return {boolean}
 */
const isObject = v => "object" === typeof v;

/**
 * check if the given type is number
 * 
 * @param {mixed} v 
 * @return {boolean}
 */
const isNumber = v => "number" === typeof v;

/**
 * check if the given type is null
 * 
 * @param {mixed} v 
 * @return {boolean}
 */
const isNull = v => v === null || v === "";



module.exports = {
    isString,
    isObject,
    isNumber,
    isNull
}