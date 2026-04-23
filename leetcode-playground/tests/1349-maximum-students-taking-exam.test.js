import { maxStudents } from '../1349-maximum-students-taking-exam.js';

describe('1349-maximum-students-taking-exam', () => {
  it("maxStudents([1, 2, 3])", () => {
    const result = maxStudents([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("maxStudents([0])", () => {
    const result = maxStudents([0]);
    expect(result).toEqual(0);
  });

  it("maxStudents([-1, 0, 1])", () => {
    const result = maxStudents([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
