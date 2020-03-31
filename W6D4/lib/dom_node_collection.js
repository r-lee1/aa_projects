class DomNodeCollection {
  constructor(HTMLElements) {
    this.htmlElements = HTMLElements;
    this.length = this.htmlElements.length;
  }

  empty() {
    this.html("");
  }
  append(input) {
    if (input instanceof DomNodeCollection) {
      this.forEach(node => {
        for (var i = 0; i < input.length; i++) {
          node.innerHTML += input.htmlElements[i].outerHTML;
        }
      });
    } else if (input instanceof HTMLElement) {
      this.forEach(node => {
        node.innerHTML += input.outerHTML;
      });
    } else if (typeof input === "string") {
      this.forEach(node => {
        node.innerHTML += input;
      });
    }

    return this;
  }

  remove() {}

  attr(attributeName, value) {
    let firstElement = this.htmlElements[0];
    if (value === undefined) {
      return firstElement.getAttribute(attributeName);
    } else {
      firstElement.setAttribute(attributeName, value);
      return this;
    }
  }

  addClass(newClass) {
    this.htmlElements.forEach(element => {
      if (element.className === "") {
        element.className = newClass;
      } else {
        element.className += (" " + newClass);
      }
    });
  }

  removeClass(className) {
    this.forEach(element => {
      let splitted = element.className.split(' ');
      let indexToDelete = splitted.indexOf(className);
      splitted.splice(indexToDelete, 1);
      element.className = splitted.join(' ');
    });
    return this;
  }

  html(str) {
    if (str !== undefined) {
      this.htmlElements.forEach(node => {
        node.innerHTML = str;
      });
    } else {
      return this.htmlElements[0].innerHTML;
    }
  }

  find() {}

  children() {
    //
    let children = [];

    this.forEach(node => {
      for (var i = 0; i < node.children.length; i++) {
        children.push(node.children[i]);
      }
    });

    let domCollection = new DomNodeCollection(children);
    return domCollection;
  }

  parent() {
    let parents = [];

    this.forEach(node => {
      if (!parents.includes(node.parentNode)) {
        parents.push(node.parentNode);
      }
    });

    let domCollection = new DomNodeCollection(parents);
    return domCollection;
  }

  forEach(cb) {
    this.htmlElements.forEach(element => {
      cb(element);
    });
  }

  on(eventString, cb) {
    this.forEach(e => {
      e.addEventListener(eventString, cb);
    });
  }
}

module.exports = DomNodeCollection;
