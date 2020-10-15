const Types = require("../src/types");


describe("Testing Types checking methods", () => {

    test("it can check if the given item is String", () => {
        let item = "Sk";
        expect(Types.isString(item)).toBeTruthy()
    })

    test("it can check if the given item is null", () => {
        expect(Types.isNull(null)).toBeTruthy();
        expect(Types.isNull("")).toBeTruthy();
    })
})