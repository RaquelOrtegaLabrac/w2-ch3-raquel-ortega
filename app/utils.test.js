/**
 * @jest-environment jsdom
 */
import { addCustomOne } from "./index.js";

// Describe("Given a strictEquals function", () => {
//   describe("When it receives 1 and 1", () => {
//     test("Then it should returns true", () => {
//       const valueA = 1;
//       const valueB = 1;
// const expectedResult = strictEquals(valueA, valueB);
//       const result = true;
//

//       expect(expectedResult).toBe(result);
//     });
//   });
// });

describe("Given addCustomOne function", () => {
  describe("When it receives 5", () => {
    test("Then it should returns 6", () => {
      const expectedResult = addCustomOne(5);
      const result = 6;

      expect(expectedResult).toBe(result);
    });
  });
});
