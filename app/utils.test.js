/**
 * @jest-environment jsdom
 */
import { addCustomOne } from "./index.js";

describe("Given addCustomOne function", () => {
  describe("When it receives 5", () => {
    test("Then it should returns 6", () => {
      const expectedResult = addCustomOne(5);
      const result = 6;

      expect(expectedResult).toBe(result);
    });
  });
});
