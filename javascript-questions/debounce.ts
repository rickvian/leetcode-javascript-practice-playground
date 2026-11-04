/**
 * @template {(...args: any[]) => unknown} T
 * @param {T} func
 * @param {number} [wait=0]
 * @returns {(...args: Parameters<T>) => void}
 */
export default function debounce(func, wait = 0) {
  /** @type {ReturnType<typeof setTimeout> | undefined} */
  let timerId;

  return /** @this {ThisParameterType<T>} */ function (...args) {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
