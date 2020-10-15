const { isObject, isString, isNumber } = require("./types");

/**
 * Array helpers methods
 * 
 * @method sortBy 
 */

/**
 * Exceptions 
 */
var INVALID_OBJECT_TYPE_ERROR = "sortBy method used with array of objects only";
var INVALID_ITEM_TYPE_ERROR = "sortBy method compare only String and Number types";

/**
 * compare between the given values
 * 
 * 
 * @param {object} a 
 * @param {object} b 
 * @param {string} item 
 * @param {string} factor 
 * @return {int}
 */
function compare(a, b, item, factor) {


    if(!isObject(a) || !isObject(b)) {
        throw new Error(INVALID_OBJECT_TYPE_ERROR);
    }

    let val1 = a[item];
    let val2 = b[item];

    if(!isString(val1) && !isString(val2) && !isNumber(val1) && !isNumber(val2)) {
        throw new Error(INVALID_ITEM_TYPE_ERROR);
    }

    if(isString(val1)) {
        val1 = val1.toUpperCase();
    }
    if(isString(val2)) {
        val2 = val2.toUpperCase();
    }

    var result = 0;
    if(val1 > val2) {
        result =  1 * factor;
    }

    if(val1 < val2) {
        result = -1 * factor;
    }

    return result;
}

/**
 * 
 * @param {array} arr       Array<Object>
 * @param {string} item     [key of sorting] 
 * @param {string} dir      [Asc|Desc]
 */
function sortBy(arr, item, dir ="asc") {
    let res = Array.from(arr);
    let factor = dir.toUpperCase() === "ASC" ? 1 : -1;
    return res.sort((a, b) => {
        return compare(a, b, item, factor)
    });

}


module.exports = {
    sortBy,
    INVALID_OBJECT_TYPE_ERROR,
    INVALID_ITEM_TYPE_ERROR
}