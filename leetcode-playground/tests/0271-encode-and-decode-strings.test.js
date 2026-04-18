import { encode, decode } from '../0271-encode-and-decode-strings';

describe('0271-encode-and-decode-strings', () => {
    it('should encode and decode a list of strings', () => {
        const strs = ['Hello', 'World'];
        const encoded = encode(strs);
        expect(decode(encoded)).toEqual(strs);
    });

    it('should handle empty strings in the list', () => {
        const strs = ['', ''];
        const encoded = encode(strs);
        expect(decode(encoded)).toEqual(strs);
    });

    it('should handle single string', () => {
        const strs = ['hello'];
        const encoded = encode(strs);
        expect(decode(encoded)).toEqual(strs);
    });

    it('should handle empty list', () => {
        const strs = [];
        const encoded = encode(strs);
        expect(decode(encoded)).toEqual(strs);
    });

    it('should handle strings with special characters', () => {
        const strs = ['Hello/World', 'foo#bar', 'test:case'];
        const encoded = encode(strs);
        expect(decode(encoded)).toEqual(strs);
    });

    it('should handle strings containing delimiter-like characters', () => {
        const strs = ['abc', 'def/ghi', ''];
        const encoded = encode(strs);
        expect(decode(encoded)).toEqual(strs);
    });

    it('should handle strings with numbers', () => {
        const strs = ['1', '22', '333', '4444'];
        const encoded = encode(strs);
        expect(decode(encoded)).toEqual(strs);
    });

    it('should handle unicode characters', () => {
        const strs = ['你好', 'こんにちは', 'مرحبا'];
        const encoded = encode(strs);
        expect(decode(encoded)).toEqual(strs);
    });

    it('should handle string that looks like an encoding', () => {
        const strs = ['4#test', '10#helloworld'];
        const encoded = encode(strs);
        expect(decode(encoded)).toEqual(strs);
    });

    it('should handle strings with whitespace (tabs, newlines)', () => {
        const strs = ['hello\tworld', 'line1\nline2', ' leading', 'trailing '];
        const encoded = encode(strs);
        expect(decode(encoded)).toEqual(strs);
    });

    it('should handle very long strings', () => {
        const longStr = 'a'.repeat(10000);
        const strs = [longStr, 'short', longStr];
        const encoded = encode(strs);
        expect(decode(encoded)).toEqual(strs);
    });

    it('should handle consecutive empty strings', () => {
        const strs = ['', '', '', 'content', ''];
        const encoded = encode(strs);
        expect(decode(encoded)).toEqual(strs);
    });

    it('should handle strings with numbers and symbols that could be misinterpreted', () => {
        const strs = ['123', '#', '##', '123#456#789'];
        const encoded = encode(strs);
        expect(decode(encoded)).toEqual(strs);
    });

    it('should preserve exact string order and content', () => {
        const strs = ['a', 'b', 'a', 'b'];  // repeated strings
        const encoded = encode(strs);
        const decoded = decode(encoded);
        expect(decoded).toEqual(strs);
        expect(decoded.length).toBe(4);
    });
});
