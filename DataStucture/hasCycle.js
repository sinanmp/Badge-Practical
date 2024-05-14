class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function hasCycle(head) {
    if (!head) {
        return false;
    }

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true; // Cycle detected
        }
    }

    return false; // No cycle found
}

// Example usage
const linkedList = new Node(1);
linkedList.next = new Node(2);
linkedList.next.next = new Node(3);
linkedList.next.next.next = linkedList; // Creating a cycle

console.log(hasCycle(linkedList)); // Output: true
