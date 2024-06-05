class TrieNode{
    constructor(){
        this.children = {}
        this.isEndOfWord=false
    }
}


class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root
        for(const char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true
    }


    search(word){
        let node = this.root

        for(const char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEndOfWord
    }


    startsWith(prefix){
        let node = this.root

        for(const char of prefix){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true
    }


    prefixSearch(prefix){
        let node = this.root 
        let words = []

        for(const char of prefix){
            if(node.children[char]){
                node = node.children[char]
            }else{
                return console.log('no words')
            }
        }

        const dfs = (node , currentword)=>{
            if(node.isEndOfWord){
                words.push(currentword)
            }
            for(const char in node.children){
                dfs(node.children[char] , currentword+char)
            }
        }

        dfs(node , prefix)
        console.log(words)
    }

    getAllInTrie(node = this.root, words =[] , word = ''){
        if(node.isEndOfWord){
            words.push(word)
        }

        for(const char in node.children){
            this.getAllInTrie(node.children[char],words ,word+char)
        }

        return words
    }
      
}


const trie = new Trie()


trie.insert('sinan')
trie.insert('shamil')
trie.insert('shanas')
trie.insert('dilshad')
trie.insert('aman')
trie.insert('jubairiya')
console.log(trie.getAllInTrie())

