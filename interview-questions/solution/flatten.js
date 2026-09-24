export default function flatten(value) {
  if (!Array.isArray(value)) {
    return [value];
  }

  return value.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc.push(...flatten(item));
    } else {
      acc.push(item);
    }

    return acc;
  }, []);
}
