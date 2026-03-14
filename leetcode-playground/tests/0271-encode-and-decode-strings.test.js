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
});
