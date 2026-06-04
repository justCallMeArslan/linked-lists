import { LinkedList } from "./linkedList.js";

const elves = new LinkedList();

elves.append("Auriel'");
elves.append("Tranduil");
elves.append("Galadriel'");
elves.append("Elrond");
elves.append("Arwen");

elves.prepend("Gandalf");



console.log(elves.size());

console.log(elves.toString());