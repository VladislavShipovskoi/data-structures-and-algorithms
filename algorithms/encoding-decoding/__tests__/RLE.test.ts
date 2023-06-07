import { RLEencode, RLEdecode } from "../RLE";

describe("RLE", () => {
  test("RLEencode", () => {
    const expectedValue = "A6B4C4DF2B4E6RTYU5J";
    const encode = RLEencode("AAAAAABBBBCCCCDFFBBBBEEEEEERTYUUUUUJ");
    expect(encode).toEqual(expectedValue);
  });

  test("RLEencode with empty string value", () => {
    const expectedValue = "";
    expect(RLEencode("")).toEqual(expectedValue);
  });

  test("RLEdecode ", () => {
    const expectedValue = "AAAAAABBBBCCCCDFFBBBBEEEEEERTYUUUUUJ";
    const decode = RLEdecode("A6B4C4DF2B4E6RTYU5J");
    expect(decode).toEqual(expectedValue);
  });

  test("RLEdecode with empty string value", () => {
    const expectedValue = "";
    expect(RLEdecode("")).toEqual(expectedValue);
  });
});
