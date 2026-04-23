import { videoStitching } from '../1024-video-stitching.js';

describe('1024-video-stitching', () => {
  it("videoStitching([[1, 2, 3], [4, 5, 6]], 2)", () => {
    const result = videoStitching([[1, 2, 3], [4, 5, 6]], 2);
    expect(result).toEqual(-1);
  });

  it("videoStitching([[1, 2], [3, 4]], 5)", () => {
    const result = videoStitching([[1, 2], [3, 4]], 5);
    expect(result).toEqual(-1);
  });

  it("videoStitching([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15)", () => {
    const result = videoStitching([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15);
    expect(result).toEqual(-1);
  });
});
