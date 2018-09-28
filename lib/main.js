const DOMNodeCollection = require('./dom_node_collection.js');

$l = function $l(selector){
  if (typeof selector === 'string') {
    let collection = Array.from(document.querySelectorAll(selector));
    return new DOMNodeCollection(collection);
  } else if (selector instanceof HTMLElement) {
    return new DOMNodeCollection([selector]);
  }
  
};

