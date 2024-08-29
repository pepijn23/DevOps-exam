// TODO: Create tests suite for validation function
/*
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid();
        expect(result).toBeDefined();
    });
});
*/

const { isLeapYear } = require('./validations.js');

test('should return true for leap years divisible by 400', () => {
  expect(isLeapYear(2000)).toBe(true);
});

test('should return false for years divisible by 100 but not by 400', () => {
  expect(isLeapYear(1700)).toBe(false);
  expect(isLeapYear(1800)).toBe(false);
  expect(isLeapYear(1900)).toBe(false);
});

test('should return true for years divisible by 4 but not by 100', () => {
  expect(isLeapYear(2008)).toBe(true);
  expect(isLeapYear(2012)).toBe(true);
  expect(isLeapYear(2016)).toBe(true);
});

test('should return false for years not divisible by 4', () => {
  expect(isLeapYear(2017)).toBe(false);
  expect(isLeapYear(2018)).toBe(false);
  expect(isLeapYear(2019)).toBe(false);
});