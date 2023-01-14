
/*
This interview question was asked by Google.

Implement locking in a binary tree. A binary tree node can be locked or unlocked only if all of its descendants or ancestors are not locked.

Design a binary tree node class with the following methods:

is_locked () , 
  which returns whether the node is locked , true or false

lock () ,
   which attempts to lock the node. If it cannot be locked, then it should return false. Otherwise, it should lock it and return true.

unlock() , 
  which unlocks the node. If it cannot be unlocked, then it should return false. Otherwise, it should unlock it and return true.
You may augment the node to add parent pointers or any other property you would like.

You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes.

Each method should run in O(h), where h is the height of the tree.


A binary tree node can be locked or unlocked only if all of its descendants or ancestors are not locked.

               2 u    <- 
              / \
          u 3     4 u => l
           / \
         u 5   6 u
                \
                  10 u
                    \
                      12u 

      output: is_locked() === false
*/

/*
can this tree be locked() ?
if(locked_decendents > 0) return false else return true
keep count of locked_decendents : 0
if all its descendants are unlocked return true

           [2l]  
          /    \
        3u      4u
        Otherwise, it should lock it and return true.
root.left
lock () ,
   which attempts to lock the node. If it cannot be locked, then it should return false. Otherwise, it should lock it and return true.
*/
class Node {
  constructor(value, left, right, parentNode = null) {
    this.value = value;
    this.is_Locked = false;
    this.left = left;
    this.parentNode = parentNode;
    this.right = right;
    this.locked_decendents = 0
  }

  can_be_locked_or_unlocked(){
    
  }

  is_locked(){
    return this.is_Locked
  }

  lock(){
    
  }
  
  unlock(){

  }
}

/*
            2u  
          /   \
        3u      4u

A binary tree node can be locked or unlocked only if all of its descendants or ancestors are not locked.

output should expect that the binary tree can be locked. return boolean.
*/

const tree = new Node(2, new Node(3, null, null, ), new Node(4), null)




class TreeNode {
  constructor( value = 0 , left = null, right= null, parent = null) {
    this.value = value  
    this.left = left
    this.right = right
    this.isLocked = false
    this.parent = parent;
    this.locked_descendants = 0;

  }

  _can_lock_or_unlock() {
    //check descedants (childrens)
      if (this.locked_descendants > 0) return false;  

    //check ancestors (parents)
      let curr = this.parent;
      while (curr) {
        if (curr.isLocked) return false; 
        curr = curr.parent;  //move up to the parent's parent. 
      }
      return true;
  }


 //return wether the node is locked
 is_locked() {
  return this.isLocked
 }


 lock() {
  // check if both parents and childrens are already locked
    let canLock = this._can_lock_or_unlock()
    if(canLock) {
      this.isLocked = true; 
      //increment locked_descendants by 1 in the parent node; 
      let curr = this.parent
      while(curr) {
        curr.locked_descendants += 1
        curr = curr.parent
      }
      return true;
    } else {
      return false
    }
}

 unlock() {
  let canUnlock = this._can_lock_or_unlock();
  if(canUnlock) {
    this.isLocked = false; 
    //decrement locked_descendants by 1 in the parent node; 
    let curr = this.parent
    while(curr) {
      curr.locked_descendants -= 1
      curr = curr.parent;
    }
    return true;
  } else {
    return false
  }
 }
}

/*
         1
        / \
      2     3
*/

let node1 = new TreeNode(1)
let node2 = new TreeNode(2)
let node3 = new TreeNode(3)
node2.parent = node1
node3.parent = node2

// let tree1 = new TreeNode(1, new TreeNode(2), new TreeNode (3), null);
// null
//   1u  === 0 
// /   \
// 2l   3u
// /\.  /\
//1 2.  3  4
// tree1.left.parent = tree1
// tree1.right.parent = tree1
// tree1.left.left.parent = tree1.left
// tree1.right.right.parent = tree1.left
// console.log(tree1.left.lock()) // 2u => 2l

// console.log(tree1._can_lock_or_unlock())  // false




// another solution
class Node1 {
  constructor(data)
  {
    this.locked = false
    this.data = data
    this.left = null
    this.right = null
    this.parent = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  is_locked(node) {
    return node.locked
  }

  lock(node) {
    if(this.lock_check(node.left)) return false;
    if(this.lock_check(node.right)) return false;

    if(node.parent != null) {
      let upstream = node.parent
      do {
        if(upstream.locked) return false;
        upstream = upstream.parent
      } while(upstream != null)
    }

    node.locked = true
    return true;
  }

  unlock(node) {
    if(this.lock_check(node.left)) return false;
    if(this.lock_check(node.right)) return false;

    if(node.parent != null) {
      let upstream = node.parent
      do {
        if(upstream.locked) return false;
        upstream = upstream.parent
      } while(upstream != null)
    }

    node.locked = false
    return true;
  }

  insert(data)
  {
    let node = new Node1(data)
  
    if(this.root === null)
      this.root = node
    else
      this.insertNode(this.root, node)
  }
  
  insertNode(node, newNode) 
  { 
    newNode.parent = node

    if(newNode.data < node.data) { 
      if(node.left === null) 
        node.left = newNode
      else
        this.insertNode(node.left, newNode)
    } else { 
      if(node.right === null) 
        node.right = newNode
      else
        this.insertNode(node.right,newNode)
    } 
  }

  lock_check(node) 
  { 
    if(node !== null) 
    { 
      if(node.locked) return true;
      let locked = this.lock_check(node.left); 
      locked = this.lock_check(node.right); 

      if(locked) return locked
    } 

    return false;
  } 

  search(node, data) 
  { 
    if(node === null) 
      return null; 
    else if(data < node.data) 
      return this.search(node.left, data); 
    else if(data > node.data) 
      return this.search(node.right, data); 
    else
      return node; 
  } 

}

let tree_test= new BinaryTree()
tree_test.insert(5)
tree_test.insert(7)
tree_test.insert(10)
tree_test.insert(6)
tree_test.insert(2)

console.table(tree_test)

