// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('valid format', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('valid format', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('invalid format', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('invalid format', () => {
  expect(isPhoneNumber('123-45-6789')).toBe(false);
});

// isEmail
test('valid email', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('valid email', () => {
  expect(isEmail('user@abc.co')).toBe(true);
});
test('invalid email', () => {
  expect(isEmail('testexample.com')).toBe(false);
});
test('invalid email', () => {
  expect(isEmail('test@.com')).toBe(false);
});

// isStrongPassword
test('valid password', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});
test('valid password', () => {
  expect(isStrongPassword('A_user1')).toBe(true);
});
test('invalid password', () => {
  expect(isStrongPassword('1abcd')).toBe(false);
});
test('invalid password', () => {
  expect(isStrongPassword('Ab1')).toBe(false);
});

// isDate
test('valid date', () => {
  expect(isDate('1/2/2023')).toBe(true);
});
test('valid date', () => {
  expect(isDate('12/25/2024')).toBe(true);
});
test('invalid date', () => {
  expect(isDate('12-25-2024')).toBe(false);
});
test('invalid date', () => {
  expect(isDate('12/25/24')).toBe(false);
});

// isHexColor
test('valid hex', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('valid hex', () => {
  expect(isHexColor('A1B2C3')).toBe(true);
});
test('invalid hex', () => {
  expect(isHexColor('#FFFF')).toBe(false);
});
test('invalid hex', () => {
  expect(isHexColor('#GGG')).toBe(false);
});