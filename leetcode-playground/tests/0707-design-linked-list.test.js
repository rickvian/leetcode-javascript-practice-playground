import { MyLinkedList } from '../0707-design-linked-list.js';

describe('0707-design-linked-list', () => {
  it("sequence 1", () => {
    const obj = new MyLinkedList();
    expect(obj.get(1)).toEqual(-1);
    obj.addAtHead(1);
    obj.addAtTail(1);
    obj.addAtIndex(1, 1);
  });
});
