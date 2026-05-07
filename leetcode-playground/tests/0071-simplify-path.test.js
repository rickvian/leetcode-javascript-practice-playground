import { simplifyPath } from "../0071-simplify-path";

describe("0071-simplify-path", () => {
  it("should handle trailing slash removal", () => {
    expect(simplifyPath("/home/")).toBe("/home");
  });

  it("should handle official example 1 - navigate up from root", () => {
    expect(simplifyPath("/../")).toBe("/");
  });

  it("should handle official example 2 - consecutive slashes", () => {
    expect(simplifyPath("/home//foo/")).toBe("/home/foo");
  });

  it("should handle official example 3 - complex path with dots and ups", () => {
    expect(simplifyPath("/a/../../b/../c//./")).toBe("/c");
  });

  it("should handle official example 4 - mixed operations", () => {
    expect(simplifyPath("/a//b////c/d//././/..")).toBe("/a/b/c");
  });

  it("should handle single dot (current directory)", () => {
    expect(simplifyPath("/a/./b")).toBe("/a/b");
  });

  it("should handle single dot at end", () => {
    expect(simplifyPath("/a/b/.")).toBe("/a/b");
  });

  it("should handle double dots (navigate up)", () => {
    expect(simplifyPath("/a/b/..")).toBe("/a");
  });

  it("should handle double dots at root", () => {
    expect(simplifyPath("/..")).toBe("/");
  });

  it("should handle multiple double dots", () => {
    expect(simplifyPath("/a/b/../../")).toBe("/");
  });

  it("should handle multiple consecutive slashes", () => {
    expect(simplifyPath("////")).toBe("/");
  });

  it("should handle root only", () => {
    expect(simplifyPath("/")).toBe("/");
  });

  it("should handle path with no slashes at end", () => {
    expect(simplifyPath("/a/b/c")).toBe("/a/b/c");
  });

  it("should handle mixed dots and ups", () => {
    expect(simplifyPath("/a/./b/../../c")).toBe("/c");
  });

  it("should handle double dots exceeding directory depth", () => {
    expect(simplifyPath("/a/b/c/../../d")).toBe("/a/d");
  });

  it("should handle path with numbers and underscores", () => {
    expect(simplifyPath("/a_b/c_d/../../d_e")).toBe("/d_e");
  });

  it("should handle deep directory structure", () => {
    expect(simplifyPath("/x/y/z/a/b/c/d/e/f")).toBe("/x/y/z/a/b/c/d/e/f");
  });

  it("should handle single directory", () => {
    expect(simplifyPath("/home")).toBe("/home");
  });

  it("should handle path ending with multiple slashes and dots", () => {
    expect(simplifyPath("/a///b/./c/..//")).toBe("/a/b");
  });
});
