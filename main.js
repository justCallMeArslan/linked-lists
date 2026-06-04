import { LinkedList } from "./linkedList.js";

const empty = new LinkedList();

console.log(empty.head());
console.log(empty.tail());
console.log(empty.pop());
console.log(empty.contains("empty"))


const elves = new LinkedList();

elves.append("Auriel'");
elves.append("Tranduil");
elves.append("Galadriel'");
elves.append("Elrond");
elves.append("Arwen");
elves.prepend("Gandalf");

console.log(elves.size());
console.log(elves.head());
console.log(elves.tail());
console.log(elves.at(2));
console.log(elves.pop());
console.log(elves.contains("Arwen"));
console.log(elves.findIndex("Galadriel'"));
console.log(elves.toString());


console.log(elves.toString());


