const DomNodeCollection = require('./dom_node_collection');

window.$l = function(arg){
  let nodeListArray = [];

  if (arg instanceof HTMLElement) {
    nodeListArray.push(arg);
    let dom = new DomNodeCollection(nodeListArray);

    return dom;
  }
  let nodeList = document.querySelectorAll(arg);

  nodeList.forEach(e => {
    nodeListArray.push(e);
  });

  let dom = new DomNodeCollection(nodeListArray);

  return dom;
};
