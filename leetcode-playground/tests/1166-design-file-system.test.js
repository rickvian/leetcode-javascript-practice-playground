import { FileSystem } from '../1166-design-file-system.js';

describe('1166-design-file-system', () => {
  it("sequence 1", () => {
    const obj = new FileSystem();
    expect(obj.createPath("/leet", 1)).toEqual(true);
    expect(obj.createPath("/leet/code", 2)).toEqual(true);
    expect(obj.get("/leet")).toEqual(1);
    expect(obj.get("/leet/code")).toEqual(2);
    expect(obj.createPath("/c/d", 1)).toEqual(false);
  });

  it("sequence 2", () => {
    const obj = new FileSystem();
    expect(obj.createPath("/a", 1)).toEqual(true);
    expect(obj.createPath("/a/b", 2)).toEqual(true);
    expect(obj.createPath("/a/b/c", 3)).toEqual(true);
    expect(obj.get("/a")).toEqual(1);
    expect(obj.get("/a/b/c")).toEqual(3);
    expect(obj.get("/z")).toEqual(-1);
  });

  it("sequence 3", () => {
    const obj = new FileSystem();
    expect(obj.createPath("/root", 10)).toEqual(true);
    expect(obj.createPath("/root/child", 20)).toEqual(true);
    expect(obj.createPath("/root", 5)).toEqual(false);
    expect(obj.get("/root")).toEqual(10);
    expect(obj.createPath("/orphan/child", 1)).toEqual(false);
    expect(obj.get("/orphan")).toEqual(-1);
  });
});
