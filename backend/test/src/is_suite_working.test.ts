test("[TEST] default 1", () => {
    expect(1).toBe(1);
    expect(2).toBe(2);
})

test("[TEST] default 2", () => {
    expect(false).toBeFalsy();
    expect(true).toBeTruthy();
})

test("[TEST] default 3", () => {
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
});

test("[TEST] default 4", () => {
    expect(0).toBeFalsy();
    expect(1).toBeTruthy();
});



test("[TEST] default 5", () => {
    expect({}).toMatchObject({});
});


test("[TEST] default 6", () => {
    let arr = ["hello", "world"];
    expect(arr).toContain("hello");
    expect(arr).toContain("world");
});


test("[TEST] default 7", () => {
    expect(1).toBeGreaterThan(0);
    expect(0).toBeLessThan(1);
});

test("[TEST] default 8", () => {
    const a = 1;
    expect(a).toBeDefined();
});


test("[TEST] default 9", () => {
    const dic = {
        "a": 1,
        "b": 2,
        "c": 3
    };
    expect(dic).toHaveProperty("a");
    expect(dic).toHaveProperty("b");
    expect(dic).toHaveProperty("c");
});


test("[TEST] default 10", () => {
    expect(() => {throw new Error();}).toThrow(Error)
});
