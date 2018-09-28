class DOMNodeCollection {
  constructor(arr) {
    this.elements = arr;
  }
  
  html(str){
    if(str !== undefined){
      this.elements.forEach((el)=>{
        el.innerHTML = str;
      });
    }else{
      return this.elements[0].innerHTML;
    }
  }
  
  empty(){
    this.elements.forEach((el)=>{
      el.innerHTML = "";
    });
  }
  
  append(args) {
    if (args instanceof DOMNodeCollection) {
      args.elements.forEach(arg => {
        this.elements.forEach(el => {
          el.innerHTML += arg.outerHTML;
        });
      });
    } else {
      this.elements.forEach(el => {
        el.innerHTML += args;
      });
    }
  }
  
  attr(name, value){
    let att;
    this.elements.forEach((el)=>{
      if(value !== undefined){  
        el.setAttribute(name,value);
      }else{
        if(el.hasAttribute(name)){
          att = el.getAttribute(name);
        }
      }
    });
    
    return att;
  }
  
  addClass(value) {
    this.attr('class', value);
  }
  
  removeClass() {
    this.elements.forEach(el => {
      el.removeAttribute('class');
    });
  }
  
  children(){
    const result = [];
    
    this.elements.forEach((el)=>{
      result.push(...el.children);
    });
    
    return new DOMNodeCollection(result);
  }
  
  parent(){
    const result = [];
    
    this.elements.forEach((el)=>{
      result.push(el.parentNode);
    });
    
    return new DOMNodeCollection(result);
  }
  
  find(selector){
    let result = [];
    
    this.elements.forEach((el)=>{
      result = result.concat(Array.from(document.querySelectorAll(selector)));  
    });
    return new DOMNodeCollection(result);
  }
  
  remove() {
    this.empty();
    this.elements = [];
  }
  
  on(eve, cb) {
    this.cb = cb;
    this.elements.forEach(el => {
      el.addEventListener(eve, cb);
    });
  }
  
  off(eve) {
    this.elements.forEach(el => {
      el.removeEventListener(eve, this.cb);
    });
  }
}

module.exports = DOMNodeCollection;