import { Validator } from '../../helpers/validator';

describe('Validator', () => {
  test('Validate pattern', () => {
    const regex = /([A-Z])\w+/
    const pattern = Validator.pattern(regex);
    expect(pattern('Hola')).toBeTruthy();
    expect(pattern('hola')).toBeFalsy();
  });
  test('Validate min', () => {
    const min = Validator.min(10);
    expect(min(12)).toBeTruthy();
    expect(min(9)).toBeFalsy();
  });
  test('Validate max', () => {
    const max = Validator.max(20);
    expect(max(12)).toBeTruthy();
    expect(max(21)).toBeFalsy();
  });
  test('Validate min length', () => {
    const minLength = Validator.minLength(3);
    expect(minLength('Hola')).toBeTruthy();
    expect(minLength('Ho')).toBeFalsy();
  });
  test('Validate max length', () => {
    const maxLength = Validator.maxLength(5);
    expect(maxLength('Hola')).toBeTruthy();
    expect(maxLength('Hola!!!!')).toBeFalsy();
  });
});