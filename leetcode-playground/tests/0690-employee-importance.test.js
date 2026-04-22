import { GetImportance } from '../0690-employee-importance.js';

describe('0690-employee-importance', () => {
  it("GetImportance([{\"id\": 1, \"importance\": 5, \"subordinates\": [2, 3]}, {\"id\": 2, \"importance\": 3, \"subordinates\": []}, {\"id\": 3, \"importance\": 3, \"subordinates\": []}], 1)", () => {
    const result = GetImportance([{"id": 1, "importance": 5, "subordinates": [2, 3]}, {"id": 2, "importance": 3, "subordinates": []}, {"id": 3, "importance": 3, "subordinates": []}], 1);
    expect(result).toEqual(11);
  });

  it("GetImportance([{\"id\": 1, \"importance\": 5, \"subordinates\": [2, 3]}, {\"id\": 2, \"importance\": 3, \"subordinates\": []}, {\"id\": 3, \"importance\": 3, \"subordinates\": []}], 2)", () => {
    const result = GetImportance([{"id": 1, "importance": 5, "subordinates": [2, 3]}, {"id": 2, "importance": 3, "subordinates": []}, {"id": 3, "importance": 3, "subordinates": []}], 2);
    expect(result).toEqual(3);
  });

  it("GetImportance([{\"id\": 1, \"importance\": 2, \"subordinates\": [2]}, {\"id\": 2, \"importance\": 3, \"subordinates\": []}], 1)", () => {
    const result = GetImportance([{"id": 1, "importance": 2, "subordinates": [2]}, {"id": 2, "importance": 3, "subordinates": []}], 1);
    expect(result).toEqual(5);
  });

  it("GetImportance([{\"id\": 1, \"importance\": 5, \"subordinates\": []}], 1)", () => {
    const result = GetImportance([{"id": 1, "importance": 5, "subordinates": []}], 1);
    expect(result).toEqual(5);
  });

  it("GetImportance([{\"id\": 2, \"importance\": 11, \"subordinates\": [5]}, {\"id\": 5, \"importance\": -3, \"subordinates\": []}], 5)", () => {
    const result = GetImportance([{"id": 2, "importance": 11, "subordinates": [5]}, {"id": 5, "importance": -3, "subordinates": []}], 5);
    expect(result).toEqual(-3);
  });
});
