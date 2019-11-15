import { decodeEntities } from "./decodeEntities";

describe("Testing if decodeEntities works as expected", () => {
  test("Entities should be decoded if there is at least one html entity", () => {
    expect(decodeEntities("&nbsp; &lt; &gt; &#39;")).toEqual("  < > '");
    expect(decodeEntities("&nbsp; hello! &nbsp; &#39; ")).toEqual(
      "  hello!   ' "
    );
    expect(decodeEntities("&#163;50,000")).toEqual("£50,000");
  });
});
