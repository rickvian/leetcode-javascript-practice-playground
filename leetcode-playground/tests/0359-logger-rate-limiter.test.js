import { Logger } from '../0359-logger-rate-limiter.js';

describe('0359-logger-rate-limiter', () => {
  it("sequence 1", () => {
    const obj = new Logger();
    expect(obj.shouldPrintMessage(1, 1)).toEqual(true);
  });
});
