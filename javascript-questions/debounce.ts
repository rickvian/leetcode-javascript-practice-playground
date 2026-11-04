export default function debounce<T extends (...args: any[]) => unknown>(
  func: T,
  wait = 0,
): (this: ThisParameterType<T>, ...args: Parameters<T>) => void {
  let timerId: ReturnType<typeof setTimeout> | undefined;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
