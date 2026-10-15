/**
 * Flatten a value into a single-level array.
 *
 * If the input is not an array, wrap it in an array.
 * If the input is an array, flatten nested arrays at any depth.
 *
 * @param {Array<*|Array>|*} value
 * @return {Array}
 */
export default function flatten(value) {
  //
  if (!Array.isArray(value)) {
    return [value];

    // flatten(1);
    // [1]

    // flatten("hello");
    // ["hello"]

    // flatten(null);
    // [null]
  }

  // otherwise, must be array, we start collecting all of the item and push to result
  return value.reduce((acc, item) => {
    // is the individual item array as well?
    if (Array.isArray(item)) {
      acc.push(...flatten(item)); // delegate that ...flatten(item) to flatten all, then spread push to acc
    } else {
      // its just normal single item, can just push.
      acc.push(item);
    }

    return acc;
  }, []); // initial [] array is important, so first iteration of acc.push will not error
}
