type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | readonly ClassValue[]
  | Readonly<Record<string, unknown>>;

function appendClassValue(value: ClassValue, classes: string[]): void {
  if (!value) {
    return;
  }

  if (typeof value === 'string' || typeof value === 'number') {
    classes.push(String(value));
    return;
  }

  if (Array.isArray(value)) {
    for (const nestedValue of value) {
      appendClassValue(nestedValue, classes);
    }
    return;
  }

  if (typeof value === 'object') {
    for (const [className, enabled] of Object.entries(value)) {
      if (enabled) {
        classes.push(className);
      }
    }
  }
}

export default function classNames(...values: ClassValue[]): string {
  const classes: string[] = [];

  for (const value of values) {
    appendClassValue(value, classes);
  }

  return classes.join(' ');
}
