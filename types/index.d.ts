/**
 * Flattens an object to one level deep.
 * Optionally takes a custom `delimiter`, otherwise uses `.` by default.
 * Circular references within the object will be replaced with `[Circular]`.
 * 
 * @param {any} obj The object to flatten.
 * @param {string} [delimiter=.] The delimiter to use.
 * @returns {object} The flattened object.
 */

export declare function flatten(obj: object, delimiter?: string): object

/**
 * Unflattens an object back to its original nested form.
 * Optionally takes a custom `delimiter`, otherwise uses `.` by default.
 * Circular references denoted by `[Circular]` are treated as Strings.
 * 
 * @param {object} obj The object to unflatten.
 * @param {string} [delimiter=.] The delimiter used in the flattened object.
 * @returns {object} The unflattened object.
 */

export declare function unflatten(obj: object, delimiter?: string): object