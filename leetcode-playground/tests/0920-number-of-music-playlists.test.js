import { numMusicPlaylists } from '../0920-number-of-music-playlists.js';

describe('0920-number-of-music-playlists', () => {
  it("numMusicPlaylists(3, 3...)", () => {
    const result = numMusicPlaylists(3, 3, 1);
    expect(result).toEqual(6);
  });

  it("numMusicPlaylists(2, 3...)", () => {
    const result = numMusicPlaylists(2, 3, 1);
    expect(result).toEqual(2);
  });

  it("numMusicPlaylists(2, 3...)", () => {
    const result = numMusicPlaylists(2, 3, 0);
    expect(result).toEqual(6);
  });

  it("numMusicPlaylists(3, 6...)", () => {
    const result = numMusicPlaylists(3, 6, 2);
    expect(result).toEqual(6);
  });

  it("numMusicPlaylists(5, 8...)", () => {
    const result = numMusicPlaylists(5, 8, 3);
    expect(result).toEqual(1800);
  });

  it("numMusicPlaylists(4, 4...)", () => {
    const result = numMusicPlaylists(4, 4, 1);
    expect(result).toEqual(24);
  });
});
