console.log('welcome');

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor(headNode) {
    this.HEAD = headNode;
    this.HEAD.nextNode = null;
  }

  append = (value) => {
    if (this.HEAD === null) {
      this.HEAD = new Node(value);
      return;
    }
    const newNode = new Node(value);
    let temp = this.HEAD;
    while (temp.nextNode != null) {
      temp = temp.nextNode;
    }

    temp.nextNode = newNode;
  }

  prepend = (value) => {
    const newHead = new Node(value);
    newHead.nextNode = this.HEAD;
    this.HEAD = newHead;
  }

  size = () => {
    if (this.HEAD === null) return 0;
    let count = 1;
    let temp = this.HEAD;
    while (temp.nextNode !== null) {
      count++;
      temp = temp.nextNode;
    }
    return count;
  }

  head = () => {
    return this.HEAD;
  }

  tail = () => {
    let temp = this.HEAD;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    return temp;
  }

  at = (index) => {
    if (this.HEAD === null) return -1;
    let count = 0;
    let temp = this.HEAD;
    while (count !== index) {
      temp = temp.nextNode;
      count++;
    }
    return temp;
  }

  pop = () => {
    if (this.HEAD.nextNode === null) {
      this.HEAD = null;
      return;
    }
    let temp = this.HEAD;
    let previous = {};
    while (temp.nextNode !== null) {
      previous = temp;
      temp = temp.nextNode;
    }
    previous.nextNode = null;
    temp = null;
    return previous;
  }

  contains = (search) => {
    if (this.HEAD === null) return false;
    if (this.HEAD.value === search) return true;
    let temp = this.HEAD;
    while (temp.nextNode !== null) {
      if (temp.value === search) return true;
      temp = temp.nextNode;
    }
    if (temp.value === search) return true;
    return false;
  }

  find = (value) => {
    if (this.HEAD === null) return -1;
    let count = 0;
    let temp = this.HEAD;
    while (temp.value !== value) {
      temp = temp.nextNode;
      count++;
    }
    return count;
  }

  toString = () => {
    let output = 'Nodes:';
    let temp = this.HEAD;
    if (temp === null) return {};
    while (temp.nextNode !== null) {
      output += ` ${temp.value}`;
      temp = temp.nextNode;
    }
    output += ` ${temp.value}`;
    console.log(output);
  }

}
const firstNode = new Node('first')
const myList = new LinkedList(firstNode);
// myList.pop();
myList.toString();
myList.append('second');
myList.append('third');
myList.prepend('zeroth');
myList.toString();
console.log('size', myList.size());
console.log('head', myList.head());
console.log('tail', myList.tail());
console.log('at(1)', myList.at(1));
console.log('at(2)', myList.at(2));
myList.toString();
console.log('pop new tail', myList.pop());
myList.toString();
console.log('contains(second)', myList.contains('second'));
console.log('find(first)', myList.find('first'));
