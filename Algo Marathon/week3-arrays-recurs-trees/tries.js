/*
Algo Workout with Ram

October 14, 2022
*/

/*
The programming interface for a legacy motor controller accepts commands as binary strings of variable length. The console has a very primitive autocomplete autocorrect feature: given an incomplete command, it will display possible commands that has the incomplete command as a prefix. For example, if '1010' is a possible command and the user enters '10', the interface should return '1010' as a possible autocomplete result.
Implement a data structure that will allow us to efficiently query possible autocomplete results given an incomplete input.

Examples
Possible commands = ['000', '1110', '01', '001', '110', '11', '0'], "input"
Input -> Output
'0' → ['000', '01', '001']
'1' → ['1110', '110', '11']
'00' → ['000', '001']
                cur = root
              root node
              /  |
             0   1
            /    |
           0     1 iscommand = true
          / \    | \
         0   1   1  0
                 |
                 0

    root = /* some trie /
    function autocomplete(input) {
      parent = findNode(input)
      if (!parent) {
        return [];
      }
      commands = findAllChildCommmands(parent)
      return commands;
    }
*/

/*
inserting '001'
           i

TrieNode cur = root;
for(i = 0, go to end){
  char c = command[i]; // '0' 
  if(c == '0'){
    if(cur.zero == null){
      TrieNode newNode = TrieNode(xxx)
      cur.zero = newNode
    }
    cur = cur.zero
  } else {
    c == '1'
  }
}
cur.isCommand = true





*/

class TrieNode {
  /*
  TrieNode zero
  TrieNode one
  boolean isCommand
  */
  constructor(isCommand = false, zero = null, one = null) {
    this.zero = zero;
    this.one = one
    this.isCommand = isCommand;
  }
}

let trie = new TrieNode()

function insertCommand(command){ // command = "010"
  let command = [...command]; // command ["0", "1", "0"]
  let nodeList = [];

  for(let i = 0; i < command.length; i++){
    let node;
    // if last
    if(i === command.length-1){
      node = new TrieNode(true);
    }
    else{
      node = new TrieNode(false);
    }

    nodeList.push(node);
  }
  // nodeList = [TrieNode(false), TrieNode(false), TrieNode(true)]
  // et nodeList = [[t0], t1, t0-true];
  /*

  root
  |
  0 - t0
  |
  0 - t1
  |
  0 - t2

  */
  for(let i = 0; i < nodeList.length-1; i++){
    let prevNode = i === 0 ? trie : nodeList[i-1];
    if(nodeList[i] === "0"){
      prevNode.zero = nodeList[i+1]
    }
    else if(nodeList[i]==="1"){
      prevNode.one = nodeList[i+1]
    }
  }

  return nodeList[0];
}











