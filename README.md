# minimalist-tree-js
Very very barebones tree written in vanilla JavaScript. The tree is nothing but a series of nested unordered lists. You can style the lists to make the tree look like whatever you want to.

## Usage

```
let aTree = MinimalistTree ( document.getElementById ('someDiv') );
aTree.draw ({
   getroots : function1 () { },
   getchildren : function2 (node) { }
   getlabel : function3 (node) { }
});
```

function1 returns the root node(s) of the tree
function2 returns an array of child nodes given the parent node
function3 returns the text label for a node

## Example

See the file demo.html