const { test, expect } = require('@jest/globals');
const Calculator = require('./../calculator');

test('Calculator should be a valid object', () => {
    calc = new Calculator();

    expect(calc).toBeInstanceOf(Calculator)
    expect(calc.result).toEqual(0)
})

test('Default value of Calculator should be 0', () => {
    calc = new Calculator();

    expect(calc.result).toEqual(0)
})

test('Default value of Calculator should be configurable', () => {
    calc = new Calculator(2);

    expect(calc.result).toEqual(2)
})

test('Add method should exist', () => {
    calc = new Calculator();

    expect(calc.add).toBeInstanceOf(Function)
})

test('Add works correctly', () => {
    calc = new Calculator(1);

    calc.add(2)

    expect(calc.result).toEqual(3)
})
