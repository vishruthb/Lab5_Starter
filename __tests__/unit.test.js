// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// testing isPhoneNumber
test('valid phone num || with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('valid phone num || with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('invalid phone num || missing dash', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('invalid phone num || too short', () => {
  expect(isPhoneNumber('123-45-6789')).toBe(false);
});

// testing isEmail
test('valid email || base test', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('valid email || with underscore', () => {
  expect(isEmail('user_1@mail.co')).toBe(true);
});
test('invalid email || missing domain', () => {
  expect(isEmail('test@.com')).toBe(false);
});
test('invalid email || missing .com', () => {
  expect(isEmail('user@mail')).toBe(false);
});

// testing isStrongPassword
test('valid strong password || alphanumeric', () => {
  expect(isStrongPassword('Abcd1')).toBe(true);
});
test('valid strong password || with underscore', () => {
  expect(isStrongPassword('a123_')).toBe(true);
});
test('invalid strong password || starts with digit', () => {
  expect(isStrongPassword('1abcde')).toBe(false);
});
test('invalid strong password || length too short', () => {
  expect(isStrongPassword('Ab1')).toBe(false);
});

// testing isDate
test('valid date || single digit month/day', () => {
  expect(isDate('1/1/2020')).toBe(true);
});
test('valid date || double digit month/day', () => {
  expect(isDate('12/31/1999')).toBe(true);
});
test('invalid date || wrong separator', () => {
  expect(isDate('01-01-2020')).toBe(false);
});
test('invalid date || month too long', () => {
  expect(isDate('123/1/2020')).toBe(false);
});

// testing isHexColor
test('valid 3-char hex || with #', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('valid 6-char hex || without #', () => {
  expect(isHexColor('ffffff')).toBe(true);
});
test('invalid hex || non-hex letters', () => {
  expect(isHexColor('GGG')).toBe(false);
});
test('invalid hex || wrong hex length', () => {
  expect(isHexColor('#1234')).toBe(false);
});