import { MyCalendarTwo } from '../0731-my-calendar-ii.js';

describe('0731-my-calendar-ii', () => {
  it("sequence 1", () => {
    const obj = new MyCalendarTwo();
    expect(obj.book(1, 1)).toEqual(true);
  });
});
