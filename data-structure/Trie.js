/**
 * Trie — prefix tree
 *
 * Each node represents one character. A path from root to a node spells a
 * prefix; a node flagged `isEnd = true` means a word terminates there.
 *
 *   insert: "cat", "car", "cars", "dog"
 *
 *           (root)
 *           /    \
 *          c      d
 *          |      |
 *          a      o
 *         / \      \
 *        t*  r      g*
 *            |
 *            *
 *            |
 *            s*       (* = isEnd)
 *
 * Nodes are NOT 26-element arrays — children live in a Map so keys can be
 * any character (Unicode, digits, symbols) without wasting space.
 *
 * Why use a trie instead of a HashMap of words?
 *   - HashMap is O(1) for *exact* match but useless for "starts with"
 *   - Trie is O(L) — proportional to query length, not dictionary size
 *   - autocomplete, spellcheck, word-search grids all want prefix queries
 *
 * Tradeoff: memory. Many short words = many shallow nodes. For very large
 * dictionaries, a compressed trie (radix tree) is more memory-efficient.
 *
 * L = length of the word/prefix being queried.
 *
 * Space: O(total characters across all inserted words)
 *
 * insert       O(L)
 * search       O(L)   — exact word
 * startsWith   O(L)   — any word with this prefix
 */
class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

class Trie {
  #root = new TrieNode();

  insert(word) {
    let node = this.#root;
    for (const ch of word) {
      if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
      node = node.children.get(ch);
    }
    node.isEnd = true;
  }

  search(word) {
    const node = this.#walk(word);
    // a prefix that lands on a real node ISN'T a word unless flagged
    return node !== null && node.isEnd;
  }

  startsWith(prefix) {
    return this.#walk(prefix) !== null;
  }

  #walk(s) {
    let node = this.#root;
    for (const ch of s) {
      const next = node.children.get(ch);
      if (next === undefined) return null;
      node = next;
    }
    return node;
  }
}

export { Trie, TrieNode };
