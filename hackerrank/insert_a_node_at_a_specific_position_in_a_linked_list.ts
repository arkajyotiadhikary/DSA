class SinglyLinkedListNode {
    data: number;
    next: SinglyLinkedListNode | null;

    constructor(nodeData: number) {
        this.data = nodeData;
        this.next = null;
    }
};


function insertNodeAtPosition(llist: SinglyLinkedListNode, data: number, position: number): SinglyLinkedListNode {
    
   const node = new SinglyLinkedListNode(data)
   
   if(position === 0)
   {
    node.next = llist
    
    return node
   }
   
   let curr = llist
   let counter = 0 
   
   while(counter < position - 1 && curr.next !== null){
    curr = curr.next
    counter++
   }
   
   node.next = curr.next
   curr.next = node
   
   return llist
}
