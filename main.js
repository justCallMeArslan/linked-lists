import { LinkedList } from "./linkedList.js";

const empty = new LinkedList();

console.log(empty.head());
console.log(empty.tail());

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
console.log(elves.at(3));

console.log(elves.toString());
