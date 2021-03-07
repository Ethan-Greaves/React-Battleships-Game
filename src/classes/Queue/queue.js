import Node from './node';

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(value) {
		const newNode = new Node(value);
		if (!this.size) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.size++;
	}

	dequeue() {
		if (!this.first) return () => void 0 || null;

		const temp = this.first;

		if (this.first === this.last) {
			this.last = null;
		}

		this.first = this.first.next;
		this.size--;
		return temp.value;
	}
}

export default Queue;
