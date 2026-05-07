/**
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently
 * store and retrieve keys in a dataset of strings. There are various applications of this
 * data structure, such as autocomplete and spellchecker.
 * Implement the Trie class with insert, search, and startsWith methods.
 *
 * https://leetcode.com/problems/implement-trie-prefix-tree/description/
 */
class Trie {

    constructor() {
        // whats in trie

        this.children = {} // mapping the children character
        this.isEndOfWord = false
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        // trie is tree data structure.
        //    a    b    c
        //         ^

        // rootTrie() 
        // children [a]:Trie()
        // children [b]:Trie()
        // children [c]:Trie()<-

        let curr = this // initiate as root

        for (let c of word) {
            if (!curr.children[c]) {
                // not exist, add c as children
                curr.children[c] = new Trie()
            }

            curr = curr.children[c] // move pointer to inner trie
        }

        curr.isEndOfWord = true

    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {

        // search
        //    g    b    c
        //              ^

        // value
        // rootTrie() 
        // children [g]:Trie()
        // children [b]:Trie()
        // children [c]:Trie()  <- curr
        // children [d]:Trie()  ?

        let curr = this

        for (let c of word) {
            if (!curr.children[c]) {
                return false // character does not exist, return false
            }

            // else, found, continue
            curr = curr.children[c] // move pointer to inner trie

        }

        return curr.isEndOfWord
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this

        for (let c of prefix) {
            if (!curr.children[c]) {
                return false // character does not exist, return false
            }

            // else, found, continue
            curr = curr.children[c] // move pointer to inner trie

        }

        return true
    }
}

export { Trie };
