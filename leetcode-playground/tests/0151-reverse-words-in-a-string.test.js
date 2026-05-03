import { reverseWords } from '../0151-reverse-words-in-a-string';

describe('0151-reverse-words-in-a-string', () => {
    it('should reverse simple sentence', () => {
        expect(reverseWords("the sky is blue")).toEqual("blue is sky the");
    });

    it('should handle leading and trailing spaces', () => {
        expect(reverseWords("  hello world  ")).toEqual("world hello");
    });

    it('should handle multiple spaces between words', () => {
        expect(reverseWords("a good   example")).toEqual("example good a");
    });

    it('should handle single word', () => {
        expect(reverseWords("a")).toEqual("a");
    });

    it('should handle only spaces', () => {
        expect(reverseWords("   ")).toEqual("");
    });

    it('should handle word with both leading and trailing spaces', () => {
        expect(reverseWords("  a  ")).toEqual("a");
    });

    it('should handle two words', () => {
        expect(reverseWords("hello world")).toEqual("world hello");
    });

    it('should reverse already reversed phrase', () => {
        expect(reverseWords("world hello")).toEqual("hello world");
    });

    it('should handle single leading space', () => {
        expect(reverseWords(" the sky is blue")).toEqual("blue is sky the");
    });

    it('should handle single trailing space', () => {
        expect(reverseWords("the sky is blue ")).toEqual("blue is sky the");
    });

    it('should handle multiple consecutive spaces in middle', () => {
        expect(reverseWords("the    sky    is    blue")).toEqual("blue is sky the");
    });

    it('should handle mixed spacing pattern', () => {
        expect(reverseWords("  the  sky  is  blue  ")).toEqual("blue is sky the");
    });

    it('should handle three words', () => {
        expect(reverseWords("one two three")).toEqual("three two one");
    });

    it('should handle reversed three words', () => {
        expect(reverseWords("three two one")).toEqual("one two three");
    });

    it('should handle complex spacing with multiple words', () => {
        expect(reverseWords("   a   b   c   ")).toEqual("c b a");
    });

    it('should handle single character multiple times', () => {
        expect(reverseWords("a b c d e")).toEqual("e d c b a");
    });

    it('should handle longer words', () => {
        expect(reverseWords("hello beautiful world")).toEqual("world beautiful hello");
    });

    it('should preserve word content while reversing order', () => {
        expect(reverseWords("Alice loves Bob")).toEqual("Bob loves Alice");
    });

    it('should handle four words', () => {
        expect(reverseWords("first second third fourth")).toEqual("fourth third second first");
    });

    it('should handle five words with irregular spacing', () => {
        expect(reverseWords("  one  two  three  four  five  ")).toEqual("five four three two one");
    });

    it('should handle palindrome-like phrases', () => {
        expect(reverseWords("race car race")).toEqual("race car race");
    });

    it('should handle all same words', () => {
        expect(reverseWords("a a a a")).toEqual("a a a a");
    });

    it('should handle words with number characters', () => {
        expect(reverseWords("abc123 def456")).toEqual("def456 abc123");
    });
});
