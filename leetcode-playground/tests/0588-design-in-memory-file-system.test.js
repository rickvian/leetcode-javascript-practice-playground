import { FileSystem } from '../0588-design-in-memory-file-system.js';

describe('0588-design-in-memory-file-system', () => {
  it("sequence 1", () => {
    const obj = new FileSystem();
    obj.mkdir("/a/b/c");
    expect(obj.ls("/")).toEqual(["a"]);
    expect(obj.ls("/a/b")).toEqual(["c"]);
    obj.mkdir("/a/b/d");
    expect(obj.ls("/a/b")).toEqual(["c", "d"]);
  });

  it("sequence 2", () => {
    const obj = new FileSystem();
    obj.addContentToFile("/file.txt", "hello");
    expect(obj.readContentFromFile("/file.txt")).toEqual("hello");
    obj.addContentToFile("/file.txt", " world");
    expect(obj.readContentFromFile("/file.txt")).toEqual("hello world");
    expect(obj.ls("/")).toEqual(["file.txt"]);
  });

  it("sequence 3", () => {
    const obj = new FileSystem();
    obj.mkdir("/a");
    obj.mkdir("/a/b");
    obj.addContentToFile("/a/b/c", "content");
    expect(obj.ls("/a/b")).toEqual(["c"]);
    expect(obj.readContentFromFile("/a/b/c")).toEqual("content");
  });
});
