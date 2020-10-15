const Arr = require("../src/array");

describe("testing sortBy method", () => {
  test("it can sort array of objects", () => {
    let users = [
      {
        name: "Mohamed",
        age: 30,
      },
      {
        name: "Amr",
        age: 40,
      },
      {
        name: "Mostafa",
        age: "32",
      },
    ];

    let sort = Arr.sortBy(users, "name");
    expect(sort[0].name).toBe("Amr");
    expect(sort[0].age).toBe(40);
  });

  test("it can sort array of objects descending", () => {
    let users = [
      {
        name: "Mohamed",
        age: 30,
      },
      {
        name: "Amr",
        age: 40,
      },
      {
        name: "Mostafa",
        age: 32,
      },
    ];

    let sort = Arr.sortBy(users, "name", "desc");
    expect(sort[0].name).toBe("Mostafa");
    expect(sort[0].age).toBe(32);
  });

  test("it can sort array of objects in number case", () => {
    let users = [
      {
        name: "Mohamed",
        age: 30,
      },
      {
        name: "Amr",
        age: 40,
      },
      {
        name: "Mostafa",
        age: 32,
      },
    ];

    let sort = Arr.sortBy(users, "age");
    expect(sort[0].name).toBe("Mohamed");
    expect(sort[0].age).toBe(30);
  });

  test("it can throw error if is not array of object", () => {
    let arr = [1, 2, 3];
    let objectException = function () {
      return Arr.sortBy(arr);
    };
    expect(objectException).toThrow();
    expect(objectException).toThrow(Error);
    expect(objectException).toThrow(Arr.INVALID_OBJECT_TYPE_ERROR);
  });

  test("it can throw error if item is not string or number", () => {
    let arr = [
      {
        name: {
          first: "m",
          last: "k",
        },
      },
      {
        name: {
          first: "k",
          last: "a",
        },
      },
    ];
    let throwInvalidItemTypeError = () => {
        return Arr.sortBy(arr, "name");
    }
    expect(throwInvalidItemTypeError).toThrow();
    expect(throwInvalidItemTypeError).toThrow(Error);
    expect(throwInvalidItemTypeError).toThrow(Arr.INVALID_ITEM_TYPE_ERROR);
  });
});
