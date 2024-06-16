import { LinkedLists } from './LinkedLists.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>DSA for Cracking the Code Interview</h1>
    <p class="read-the-docs">
      Javascript Data Structures and Algorithms + LEETCODE Exercises
    </p>
  </div>
`;

const myLinkedList = new LinkedLists(1);

console.log('Push: ', myLinkedList.push(2));
console.log('Push: ', myLinkedList.push(3));
console.log('Push: ', myLinkedList.push(4));

console.log('Pop: ', myLinkedList.pop());

console.log('Unshift: ', myLinkedList.unshift(10));

console.log('Shift: ', myLinkedList.shift());

console.log('Get: ', myLinkedList.get(2));

console.log('Set: ', myLinkedList.set(2, 10));
//
console.log('Insert: ', myLinkedList.insert(1, 20));
//
console.log('Remove: ', myLinkedList.remove(1));

console.log('Reverse: ', myLinkedList.reverse());

console.log('Final Result: ', myLinkedList);
