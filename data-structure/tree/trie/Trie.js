const { TrieNode } = require('./TrieNode')

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word){
        let cur = this.root
        for(let char of word){
            if(!cur.children[char]){
                cur.children[char] = new TrieNode(char)
            }
            cur = cur.children[char]
        }
        cur.isEnd = true
    }
    searchPrefix(word){
        let cur = this.root
        for(let char of word){
            if(!cur.children[char]){
                return false
            }
            cur = cur.children[char]
        }
        return true
    }
}

module.exports = {
    Trie
}