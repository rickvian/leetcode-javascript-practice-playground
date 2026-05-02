import { addBinary } from '../0067-add-binary';

describe('0067-add-binary', () => {
    it('should add two binary strings - official example 1', () => {
        const result = addBinary("11", "1");
        if (result !== undefined) expect(result).toBe("100");
    });

    it('should add two binary strings - official example 2', () => {
        const result = addBinary("1010", "1011");
        if (result !== undefined) expect(result).toBe("10101");
    });

    it('should handle a="0" and b="0"', () => {
        const result = addBinary("0", "0");
        if (result !== undefined) expect(result).toBe("0");
    });

    it('should handle a="0" with non-zero b', () => {
        const result = addBinary("0", "101");
        if (result !== undefined) expect(result).toBe("101");
    });

    it('should handle b="0" with non-zero a', () => {
        const result = addBinary("1011", "0");
        if (result !== undefined) expect(result).toBe("1011");
    });

    it('should handle both inputs equal "1"', () => {
        const result = addBinary("1", "1");
        if (result !== undefined) expect(result).toBe("10");
    });

    it('should handle inputs of different lengths - a shorter', () => {
        const result = addBinary("1", "1111");
        if (result !== undefined) expect(result).toBe("10000");
    });

    it('should handle inputs of different lengths - b shorter', () => {
        const result = addBinary("11111", "1");
        if (result !== undefined) expect(result).toBe("100000");
    });

    it('should propagate carry to produce new leading 1', () => {
        const result = addBinary("1111", "1");
        if (result !== undefined) expect(result).toBe("10000");
    });

    it('should propagate carry across multiple positions', () => {
        const result = addBinary("111", "111");
        if (result !== undefined) expect(result).toBe("1110");
    });

    it('should handle large binary strings', () => {
        const result = addBinary("1010101010101010", "101010101010101");
        if (result !== undefined) expect(result).toBe("1111111111111111");
    });

    it('should handle result with leading 1 from carry', () => {
        const result = addBinary("111", "1");
        if (result !== undefined) expect(result).toBe("1000");
    });

    it('should handle binary addition with interleaved 1s and 0s', () => {
        const result = addBinary("101", "110");
        if (result !== undefined) expect(result).toBe("1011");
    });

    it('should handle single 1 + single 1', () => {
        const result = addBinary("1", "1");
        if (result !== undefined) expect(result).toBe("10");
    });

    it('should handle many 1s in both inputs', () => {
        const result = addBinary("11111111", "11111111");
        if (result !== undefined) expect(result).toBe("111111110");
    });

    it('should handle mixed patterns with varying carries', () => {
        const result = addBinary("10110", "10011");
        if (result !== undefined) expect(result).toBe("101001");
    });

    it('should handle long string with trailing zeros', () => {
        const result = addBinary("1100", "100");
        if (result !== undefined) expect(result).toBe("10000");
    });

    it('should handle no carry scenario', () => {
        const result = addBinary("101", "010");
        if (result !== undefined) expect(result).toBe("111");
    });
});
