export const Validator = {
  pattern: (regex) => (value) => regex.test(value),
  min: (min) => (value) => value >= min,
  max: (max) => (value) => value <= max,
  minLength: (minLength) => (value) => value.length >= minLength,
  maxLength: (maxLength) => (value) => value.length <= maxLength,
}