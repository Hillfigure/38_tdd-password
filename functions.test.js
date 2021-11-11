const functions = require('./functions');

// EXPECT TO PASS

test("Check if string is not null", () => {
    const str = "undefined";
    expect(functions.isNotNull(str)).not.toBeFalsy();
})

test("Check if string is under 8 chars", () => {
    const str = "hallodaa";
    expect(functions.hasRightLength(str)).toBeTruthy();
})

test("Check if string contains uppercase", () => {
    const str = "hallodaA";
    expect(functions.hasUpperCaseCharacter(str)).toBeTruthy();
})

test("Check if string contains lowercase", () => {
    const str = "HALlO";
    expect(functions.hasLowerCaseCharacter(str)).toBeTruthy();
})

test("Check if string contains lowercase", () => {
    const str = "HALlO";
    expect(functions.hasLowerCaseCharacter(str)).toBeTruthy();
})

test("Check if string contains digit(s)", () => {

    const str = "ha0llo";
    expect(functions.hasDigit(str)).toBeTruthy();
})

// EXPECT TO FAIL - FALSY

test("only lowercase", () => {
    const str = "hallojafdsasdf";
    expect(functions.verifyPassword(str)).toBeFalsy();
})

test("no lowercase", () => {
    const str = "HEKFD";
    expect(functions.verifyPassword(str)).toBeFalsy();
})
