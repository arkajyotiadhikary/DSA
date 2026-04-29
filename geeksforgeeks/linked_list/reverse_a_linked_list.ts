class LinkedListNode{
    data:number
    next:LinkedListNode | null

    constructor(data:number){
        this.data = data;
        this.next = null;
    }
}

class ReverseALinkedList {
    reverseList(head: LinkedListNode | null) {
        let curr = head
        let prev:LinkedListNode | null = null
        
        while(curr !== null)
        {
            const next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        
        
        return prev
    }
}