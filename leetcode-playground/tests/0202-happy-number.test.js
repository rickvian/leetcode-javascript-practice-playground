import { isHappy } from '../0202-happy-number';

describe('0202-happy-number', () => {
    it('should return true for n=1', () => {
        expect(isHappy(1)).toEqual(true);
    });

    it('should return true for n=7', () => {
        expect(isHappy(7)).toEqual(true);
    });

    it('should return true for n=10', () => {
        expect(isHappy(10)).toEqual(true);
    });

    it('should return true for n=13', () => {
        expect(isHappy(13)).toEqual(true);
    });

    it('should return true for n=19', () => {
        expect(isHappy(19)).toEqual(true);
    });

    it('should return false for n=2', () => {
        expect(isHappy(2)).toEqual(false);
    });

    it('should return false for n=4', () => {
        expect(isHappy(4)).toEqual(false);
    });

    it('should return false for n=5', () => {
        expect(isHappy(5)).toEqual(false);
    });

    it('should return false for n=6', () => {
        expect(isHappy(6)).toEqual(false);
    });

    it('should return false for n=11', () => {
        expect(isHappy(11)).toEqual(false);
    });

    it('should return false for n=20', () => {
        expect(isHappy(20)).toEqual(false);
    });

    it('should return true for n=23', () => {
        expect(isHappy(23)).toEqual(true);
    });
});
