const enhancer = require("./enhancer.js");
const { repair, succeed, fail } = require("./enhancer.js");
// test away!
describe("enhancer", function() {
  describe("repair()", function() {
    it("should return the item with a durability of 100", function() {
      const repairedItem = repair({ item: "item", durability: 80 });

      expect(repairedItem.durability).toBe(100);
    });
  });

  describe("succeed()", function() {
    it("should return item with modified enhancements according to the client", function() {
      const enhancedItem = succeed({ item: "item", enhancement: 5 });
      expect(enhancedItem.enhancement).toBe(6);
    });

    it("should return item as 20 if item enhancement is already 20", function() {
      const sameEnhance = succeed({ item: "item", enhancement: 20 });
      expect(sameEnhance.enhancement).toBe(20);
    });
  });

  describe("fail", function() {
    it("should return -1 if durability level is > 16", function() {
      const failedItem = fail({
        item: "item",
        enhancement: 17,
        durability: 80
      });
      expect(failedItem.durability).toBe(79);
    });

    it("should return durability level - 10 if enhancment level is >= 15", function() {
      const failedItem = fail({
        item: "item",
        enhancement: 15,
        durability: 65
      });

      expect(failedItem.durability).toBe(55);
    });

    it("should return durability level -5 if enhancment level is < 15", function() {
      const failedItem = fail({
        item: "item",
        enhancement: 14,
        durability: 90
      });
      expect(failedItem.durability).toBe(85);
    });
  });
});
