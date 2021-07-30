import { getFirstItem } from '../../helpers/getFirstItem';

describe('getFirstItem', () => {
  test('Get first item from array', () => {
    const firstItem = { id: 1, name: 'item1'};
    const list = [firstItem, { id: 2, name: 'item2'}]
    expect(getFirstItem(list)).toEqual(firstItem);
  });
  test('Get an empty object when data isnt an array', () => {
    const list = {};
    expect(getFirstItem(list)).toEqual({});
  });
});