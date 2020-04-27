# minimalist-tree-js
Very very barebones tree written in vanilla JavaScript. The tree is nothing but a series of nested unordered lists. You can style the lists to make the tree look like whatever you want to.

## Usage

```
let aTree = MinimalistTree ( document.getElementById ('someDiv') );
aTree.draw (function1 () { }, function2 (node) { });
```

function1 returns the root node(s) of the tree
function2 returns an array of child nodes given the parent node
