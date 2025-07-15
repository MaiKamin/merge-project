import { merge } from "../src/merge";

describe("merge function", () => {
  test("test case 1", () => {
    expect(merge([2, 3, 1], [2], [3])).toEqual([1, 2, 2, 3, 3]);
  });

});
