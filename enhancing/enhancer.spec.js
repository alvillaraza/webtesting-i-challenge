const enhancer = require("./enhancer.js");
const { repair } = require("./enhancer.js");
// test away!
describe("enhancer", function() {
  describe("repair()", function() {
    it("should return the item with a durability of 100", function() {
      const repairedItem = repair({ item: "item", durability: 80 });

      expect(repairedItem.durability).toBe(100);
    });
  });
});
