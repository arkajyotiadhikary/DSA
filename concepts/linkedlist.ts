class ListNode {
    value:number
    next: ListNode | null
    prev: ListNode | null

    constructor(value:number, next: ListNode | null = null ,prev: ListNode | null = null) {
        this.value = value
        this.next = next
        this.prev = prev
    }
}

// lets build  1 -> 2 -> 3

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)

node1.next = node2
node2.next = node3

function printList(head:ListNode | null): void{
    let curr = head;

    while(curr !== null){
        console.log(curr.value)
        curr = curr.next
    }
}


// insert at head 0(1)
function insertHead(head: ListNode | null, value: number): ListNode {
    return new ListNode(value, head);
} 

function insertTail(head:ListNode | null,value:number):ListNode{

    const node = new ListNode(value, null)

    // if this is the fist element of the list
    if(head === null) return node

    let curr = head

    while(curr.next !== null)
    {
        curr = curr.next
    }

    curr.next = node

    return head
}

function insertAt(head: ListNode | null, value: number, position: number): ListNode{
    if(position === 0) return new ListNode(value, head)
    if(head === null) return new ListNode(value) 
    
    let curr = head
    let counter = 0
    

    while(counter < position - 1 && curr.next !== null)
    {
        counter++
        curr = curr.next
    }

    curr.next = new ListNode(value,curr.next) 

    return head
}

function revList(head: ListNode | null): ListNode | null {
    let curr = head
    let prev: ListNode | null = null

    while(curr !== null)
    {
        const next = curr.next
        curr.next = prev
        prev = curr 
        curr = next
    }

    return prev
}

// initializng the list with 12

let list = new ListNode(12)
list = insertHead(list,11)
list = insertTail(list,29)
list = insertAt(list,2,3)
list = insertAt(list,0,1)

printList(list)



