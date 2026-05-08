import { HashMap } from '../HashMap.js';

describe('HashMap', () => {
    it('starts empty', () => {
        const m = new HashMap();
        expect(m.size()).toBe(0);
        expect(m.get('x')).toBeUndefined();
        expect(m.has('x')).toBe(false);
    });

    it('set/get round trip', () => {
        const m = new HashMap();
        m.set('a', 1);
        m.set('b', 2);
        expect(m.get('a')).toBe(1);
        expect(m.get('b')).toBe(2);
        expect(m.size()).toBe(2);
    });

    it('set on existing key updates value, not size', () => {
        const m = new HashMap();
        m.set('a', 1);
        m.set('a', 99);
        expect(m.get('a')).toBe(99);
        expect(m.size()).toBe(1);
    });

    it('delete removes entry', () => {
        const m = new HashMap();
        m.set('a', 1); m.set('b', 2);
        expect(m.delete('a')).toBe(true);
        expect(m.has('a')).toBe(false);
        expect(m.size()).toBe(1);
        expect(m.delete('missing')).toBe(false);
    });

    it('survives rehash — insert past load factor threshold', () => {
        const m = new HashMap();
        // initial capacity = 16, load factor 0.75 → resize after ~12 entries
        for (let i = 0; i < 200; i++) m.set(`k${i}`, i);
        for (let i = 0; i < 200; i++) expect(m.get(`k${i}`)).toBe(i);
        expect(m.size()).toBe(200);
    });

    it('distinguishes numeric and string keys with same hash', () => {
        // 1 and "1" hash to the same bucket (String(key) for hashing) but the
        // chain uses strict === to compare keys, so they remain distinct entries.
        // Same semantics as native Map.
        const m = new HashMap();
        m.set(1, 'one');
        m.set('1', 'one-string');
        expect(m.get(1)).toBe('one');
        expect(m.get('1')).toBe('one-string');
        expect(m.size()).toBe(2);
    });

    it('entries() yields all pairs', () => {
        const m = new HashMap();
        m.set('a', 1); m.set('b', 2); m.set('c', 3);
        const collected = [...m.entries()].sort();
        expect(collected).toEqual([['a', 1], ['b', 2], ['c', 3]]);
    });
});
