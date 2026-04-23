import { leastOpsExpressTarget } from '../0964-least-operators-to-express-number.js';

describe('0964-least-operators-to-express-number', () => {
  it("leastOpsExpressTarget(3, 19)", () => {
    const result = leastOpsExpressTarget(3, 19);
    expect(result).toEqual(5);
  });

  it("leastOpsExpressTarget(5, 501)", () => {
    const result = leastOpsExpressTarget(5, 501);
    expect(result).toEqual(8);
  });

  it("leastOpsExpressTarget(2, 125)", () => {
    const result = leastOpsExpressTarget(2, 125);
    expect(result).toEqual(9);
  });

  it("leastOpsExpressTarget(10, 1000)", () => {
    const result = leastOpsExpressTarget(10, 1000);
    expect(result).toEqual(2);
  });

  it("leastOpsExpressTarget(3, 1)", () => {
    const result = leastOpsExpressTarget(3, 1);
    expect(result).toEqual(1);
  });

  it("leastOpsExpressTarget(2, 2)", () => {
    const result = leastOpsExpressTarget(2, 2);
    expect(result).toEqual(0);
  });
});
