import { LogSystem } from '../0635-design-log-storage-system.js';

describe('0635-design-log-storage-system', () => {
  it("sequence 1", () => {
    const obj = new LogSystem();
    obj.put(1, "2017:01:01:23:59:59");
    obj.put(2, "2017:01:01:22:59:59");
    obj.put(3, "2016:01:01:00:00:00");
    expect(obj.retrieve("2016:01:01:01:01:01", "2017:01:01:23:00:00", "Year")).toEqual([1, 2, 3]);
    expect(obj.retrieve("2016:01:01:01:01:01", "2017:01:01:23:00:00", "Hour")).toEqual([1, 2]);
    expect(obj.retrieve("2017:01:01:00:00:00", "2017:01:01:23:59:00", "Second")).toEqual([2]);
  });

  it("sequence 2", () => {
    const obj = new LogSystem();
    obj.put(1, "2017:01:01:00:00:00");
    expect(obj.retrieve("2017:01:01:00:00:00", "2017:01:01:00:00:00", "Second")).toEqual([1]);
    obj.put(2, "2017:01:01:00:00:01");
    expect(obj.retrieve("2017:01:01:00:00:00", "2017:01:01:00:00:01", "Minute")).toEqual([1, 2]);
  });

  it("sequence 3", () => {
    const obj = new LogSystem();
    obj.put(10, "2017:03:15:12:30:00");
    expect(obj.retrieve("2017:03:01:00:00:00", "2017:04:01:00:00:00", "Month")).toEqual([10]);
  });
});
