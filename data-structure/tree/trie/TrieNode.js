class TrieNode {
    constructor(val) {
        this.val = val
        this.children = {}
        this.isEnd = false
    }
}

module.exports = {
    TrieNode
}