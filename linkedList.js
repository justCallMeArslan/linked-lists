function Node(value = null, nextNode = null) {
    return {
        value, nextNode
    }

}



export function LinkedList() {

    let start = null;  // beginning of linked list (first node)

    function append(value) {
        const newNode = Node(value); // creaing newNode containing the value

        if (start === null) { // if empty newNode is first element
            start = newNode;
            return;
        }

        let current = start; // creating variable current which works as pointer

        while (current.nextNode !== null) { // if not empty 
            current = current.nextNode; // move to next node
        }
        current.nextNode = newNode; // links last node to the new mode
    }



    function toString() {
        let current = start;
        let result = ""; // to collect all nodes into string

        while (current !== null) {  // iterate  while not a null (end of list)
            result += `(${current.value}) -> `; // add current value to string and
            current = current.nextNode; // move to next node
        }

        return result + "null"; // return result string and "null" for conventions
    }

    return {
        append, toString
    }




}


