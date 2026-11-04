import FakeTimers from '@sinonjs/fake-timers';

import debounce from './debounce';

type InstalledClock = ReturnType<
  ReturnType<typeof FakeTimers.withGlobal>['install']
>;

let clock!: InstalledClock;

describe('debounce', () => {
  beforeEach(() => {
    clock = FakeTimers.withGlobal(globalThis).install();
  });

  afterEach(() => {
    clock.uninstall();
  });

  test('can be initialized', () => {
    const increment = debounce(() => {}, 50);
    expect(increment).toBeTruthy();
  });

  test('uses zero delay by default', () => {
    let i = 0;
    const increment = debounce(() => {
      i++;
    });

    increment();
    expect(i).toBe(0);

    clock.tick(0);
    expect(i).toBe(1);
  });

  test('executes after duration', () => {
    let i = 0;
    const increment = debounce(() => {
      i++;
    }, 10);

    expect(i).toBe(0);
    increment();
    expect(i).toBe(0);

    clock.tick(20);
    expect(i).toBe(1);
  });

  describe('uses arguments', () => {
    test('called once', () => {
      let i = 21;
      const increment = debounce((a: number, b: number) => {
        i += a * b;
      }, 10);

      expect(i).toBe(21);
      increment(3, 7);
      expect(i).toBe(21);

      clock.tick(20);
      expect(i).toBe(42);
    });

    test('uses arguments of latest invocation', () => {
      let i = 21;
      const increment = debounce((a: number, b: number) => {
        i += a * b;
      }, 10);

      expect(i).toBe(21);
      increment(3, 7);
      increment(4, 5);
      expect(i).toBe(21);

      clock.tick(20);
      expect(i).toBe(41);
    });
  });

  test('execute once even after calling it multiple times', () => {
    let i = 0;
    const increment = debounce(() => {
      i++;
    }, 20);

    expect(i).toBe(0);
    increment();
    increment();
    increment();
    increment();
    expect(i).toBe(0);

    // Should not fire yet.
    clock.tick(10);
    expect(i).toBe(0);

    clock.tick(20);
    expect(i).toBe(1);
  });

  test('duration extended if called again during window', () => {
    let i = 0;
    const increment = debounce(() => {
      i++;
    }, 100);

    expect(i).toBe(0);
    increment();
    increment();
    expect(i).toBe(0);

    // Should not fire yet.
    clock.tick(50);
    expect(i).toBe(0);
    increment();
    expect(i).toBe(0);

    // Still 0 because the timer fired again at t=50; increment will only happen at t=150.
    clock.tick(75);
    expect(i).toBe(0);

    clock.tick(25);
    expect(i).toBe(1);
  });

  test('callbacks can access `this`', () => {
    const increment = debounce(function (this: { val: number }, delta: number) {
      this.val += delta;
    }, 10);

    const obj = {
      val: 2,
      increment,
    };

    expect(obj.val).toBe(2);
    obj.increment(3);
    expect(obj.val).toBe(2);

    clock.tick(20);
    expect(obj.val).toBe(5);
  });

  test('uses `this` from the latest invocation', () => {
    const values: number[] = [];
    const record = debounce(function (this: { value: number }) {
      values.push(this.value);
    }, 10);

    const first = { value: 1, record };
    const second = { value: 2, record };

    first.record();
    second.record();
    clock.tick(20);

    expect(values).toStrictEqual([2]);
  });
});
