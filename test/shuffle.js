import { expect } from "chai";
import { shuffle } from "../starter/src/shuffle.js";
describe("shuffle function", () => {
  it("should shuffle an array", () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...original]);

    // Length should be the same
    expect(shuffled).to.have.lengthOf(original.length);

    // At least one element should be in a different position
    const isDifferent = shuffled.some((val, index) => val !== original[index]);
    expect(isDifferent).to.be.true;
  });
});
