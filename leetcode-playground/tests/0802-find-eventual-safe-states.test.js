import { eventualSafeNodes } from '../0802-find-eventual-safe-states.js';

describe('0802-find-eventual-safe-states', () => {
  it("eventualSafeNodes([[]])", () => {
    const result = eventualSafeNodes([[]]);
    expect(result).toEqual([0]);
  });
});
