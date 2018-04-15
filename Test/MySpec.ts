import { get1 } from "../Scripts/Code";

describe("My Test", () => {
    it("should be so", () => {
        expect(2 + 2).toEqual(4);
    });

    it("but not so", () => {
        expect(2 + 2).toEqual(3);
    });
});

describe("Get1", () => {
    it("delivers 1", () => {
        expect(get1()).toEqual(1);
    });
});
