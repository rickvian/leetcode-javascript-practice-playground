export default function curry(func) {
  function curried(...args) {
    if (args.length >= func.length) return func.apply(this, args);

    return (...nextArgs) => curried.apply(this, [...args, ...nextArgs]);
  }
  return curried;
}
