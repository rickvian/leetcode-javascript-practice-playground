import { ExamRoom } from '../0855-exam-room.js';

describe('0855-exam-room', () => {
  it("sequence 1", () => {
    const obj = new ExamRoom();
    expect(obj.seat()).toEqual(0);
    obj.leave(1);
    expect(obj.findInsertPosition(1)).toEqual(0);
  });
});
