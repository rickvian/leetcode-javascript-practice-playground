import { TreeNode, serialize, deserialize } from '../0297-serialize-and-deserialize-binary-tree';

function buildTree(arr) {
    if (!arr || arr.length === 0) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (queue.length > 0 && i < arr.length) {
        const node = queue.shift();
        if (i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

function treeToArray(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift();
        if (node === null) {
            result.push(null);
        } else {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    // Trim trailing nulls
    while (result.length > 0 && result[result.length - 1] === null) {
        result.pop();
    }
    return result;
}

describe('0297-serialize-and-deserialize-binary-tree', () => {
    it('should serialize and deserialize a simple tree', () => {
        const root = buildTree([1, 2, 3, null, null, 4, 5]);
        const serialized = serialize(root);
        const deserialized = deserialize(serialized);
        expect(treeToArray(deserialized)).toEqual(treeToArray(root));
    });

    it('should handle empty tree', () => {
        const root = null;
        const serialized = serialize(root);
        const deserialized = deserialize(serialized);
        expect(deserialized).toBeNull();
    });

    it('should handle single node', () => {
        const root = new TreeNode(1);
        const serialized = serialize(root);
        const deserialized = deserialize(serialized);
        if (deserialized) {
            expect(deserialized.val).toBe(1);
            expect(deserialized.left).toBeNull();
            expect(deserialized.right).toBeNull();
        } else {
            expect(deserialized).not.toBeNull();
        }
    });

    it('should handle left-only tree', () => {
        const root = buildTree([1, 2, null, 3]);
        const serialized = serialize(root);
        const deserialized = deserialize(serialized);
        expect(treeToArray(deserialized)).toEqual(treeToArray(root));
    });

    it('should handle right-only tree', () => {
        const root = buildTree([1, null, 2, null, 3]);
        const serialized = serialize(root);
        const deserialized = deserialize(serialized);
        expect(treeToArray(deserialized)).toEqual(treeToArray(root));
    });

    it('should handle complete binary tree', () => {
        const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
        const serialized = serialize(root);
        const deserialized = deserialize(serialized);
        expect(treeToArray(deserialized)).toEqual(treeToArray(root));
    });

    it('should handle tree with negative values', () => {
        const root = buildTree([-1, -2, -3]);
        const serialized = serialize(root);
        const deserialized = deserialize(serialized);
        expect(treeToArray(deserialized)).toEqual(treeToArray(root));
    });

    it('should preserve tree structure through encode/decode cycle', () => {
        const root = buildTree([5, 4, 7, 3, null, 2, null, -1]);
        const serialized = serialize(root);
        const deserialized = deserialize(serialized);
        expect(treeToArray(deserialized)).toEqual(treeToArray(root));
    });
});
