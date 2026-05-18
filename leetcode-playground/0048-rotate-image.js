/**
 * Rotate an image 90 degrees clockwise in-place.
 *
 * https://leetcode.com/problems/rotate-image/description/
 * @param {number[][]} matrix - The m x n matrix to rotate
 * @return {void} Rotates matrix in-place
 */
var rotate = function (matrix) {
  // Think of the matrix as concentric rings (like an onion).
  // Each iteration of the while loop processes one ring, from outermost to innermost.
  // left/right shrink the ring horizontally, top/bottom shrink it vertically.
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;

  while (left < right) {
    // i is an OFFSET from the ring's starting corner — not an absolute index.
    // It walks along the top edge: 0 means "first element of this ring", 1 means "second", etc.
    // right - left - 1 = number of elements to rotate per side (excluding the last corner,
    // which is already handled by the previous i).
    for (let i = 0; i <= right - left - 1; i++) {
      // Mental model: picture a clockwise cycle of 4 cells.
      // Save top-left before it gets overwritten, then chain-shift counter-clockwise:
      //   bottom-left → top-left → top-right → bottom-right → (back to top-left via saved)
      // Counter-clockwise chain = only 1 temp variable needed.
      //
      // Tip to recall each line: track which EDGE the cell sits on, then apply i as the offset
      // AWAY from the ring's starting corner along that edge:
      //   top edge    → col grows right:  left + i
      //   left edge   → row grows down:   top + i  (but counted from bottom: bottom - i)
      //   bottom edge → col grows left:   right - i
      //   right edge  → row grows up:     top + i

      let topLeft = matrix[top][left + i]; // save top-left

      matrix[top][left + i] = matrix[bottom - i][left]; // bottom-left  → top-left
      matrix[bottom - i][left] = matrix[bottom][right - i]; // bottom-right → bottom-left
      matrix[bottom][right - i] = matrix[top + i][right]; // top-right    → bottom-right
      matrix[top + i][right] = topLeft; // top-left     → top-right
    }

    // Done with this ring — shrink inward to the next one.
    top++;
    bottom--;
    left++;
    right--;
  }
};

export { rotate };
