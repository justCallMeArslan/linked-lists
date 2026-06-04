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

    function prepend(value) {
        const newNode = Node(value);

        newNode.nextNode = start; //new node aligns with current first node
        start = newNode; // updating start so new mode will become first element/
        // node
    }

    function size() {

        let current = start;

        //array way (store value and count them)
        // let result = [];

        // while (current !== null) {
        //     result.push(current.value);
        //     current = current.nextNode;
        // }

        // return result.length;

        // counter way (count visited through iteration nodes)
        let count = 0;

        while (current !== null) {
            count++;
            current = current.nextNode;
        }

        return count;
    }

    function head() {

        if (start === null) {
            return undefined;
        }

        return start.value;

    }

    function tail() {

        if (start === null) {
            return undefined;
        }

        let current = start;

        while (current.nextNode !== null) {
            current = current.nextNode;
        }

        return current.value
    }

    function at(index) {
        let current = start;
        let i = 0

        while (current !== null) {
            if (i === index) return current.value;
            current = current.nextNode;
            i++;
        }

        return undefined;
    }

    function pop() {

        if (start === null) {
            return undefined;
        }

        const startElValue = start.value;
        start = start.nextNode;

        return startElValue
    }

    function contains(value) {
        let current = start;

        while (current !== null) { // looping trough 
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    function findIndex(value) {
        let current = start;
        let i = 0;
        while (current !== null) {
            if (current.value === value) {
                return i;
            }
            current = current.nextNode;
            i++;
        }
        return -1;
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
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        findIndex,
        toString
    }

}


