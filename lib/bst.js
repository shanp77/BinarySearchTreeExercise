class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor() {
       this.root = null;
   }

   insert(val, root = this.root) {
       let node = new TreeNode(val);

       if(!this.root) {
           this.root = node;
           return;
       }

        if(val < root.val) {
            if(!root.left) {
                root.left = new TreeNode(val);
            } else {
                this.insert(val, root.left)
            }
        } else {
            if (!root.right) {
                root.right = new TreeNode(val);;
            } else {
                this.insert(val, root.right);
            }
        }
   }

   searchRecur(val, root = this.root) {
       if(!this.root) return false;
       if(!root) return false;

       if (val < root.val) {
            return this.searchRecur(val, root.left);
       } else if (val > root.val) {
          return this.searchRecur(val, root.right);
       } else {
           return true;
       }

   } 

   //[10, 7, 16, 5, 1, 16]

   searchIter(val, root = this.root) {
       if(!this.root) return false;
       
       let queue = [root];
       
       while (queue.length > 0) {
        let current = queue.shift();

        if (val < current.val) {
            if(current.left) queue.push(current.left);
        } else if (val > current.val) {
            if(current.right) queue.push(current.right);
        } else {
            return true; 

        }
       }
       return false;
   }
}

module.exports = {
    TreeNode,
    BST
};