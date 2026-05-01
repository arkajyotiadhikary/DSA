class LinkedListNode2 {
    data: number
    next: LinkedListNode2 | null

    constructor(data: number) {
        this.data = data
        this.next = null
    }
}

class RotateALinkedList {
    rotate(head: LinkedListNode2 | null, k: number): LinkedListNode2 | null {
        if (head === null) return null

        let tail = head
        let length = 1

        while (tail.next !== null) {
            tail = tail.next
            length++
        }

        k %= length
        if (k === 0) return head

        tail.next = head

        let newTail = tail

        for (let i = 0; i < k; i++) {
            newTail = newTail.next!
        }

        const newHead = newTail.next
        newTail.next = null

        return newHead
    }
}
