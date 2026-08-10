export default function curry(func) {
  function curried(...args) {
    if (func.length === 0) return func.call(this);
    if (args.length >= func.length) return func.apply(this, args);

    return (...nextArgs) => curried.apply(this, [...args, ...nextArgs]);
  }

  return curried;
}
