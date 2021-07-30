import { mount } from 'enzyme';
import Menu from '../../components/Menu';

describe('Menu', () => {
  test('Menu is rendering', () => {
    const menu =  mount(<Menu menu={[]} showMenu={true} />);
    expect(menu.length).toEqual(1);
  });
  test('Menu is collapsed', () => {
    const menu =  mount(<Menu menu={[]} showMenu={false} />);
    expect(menu.find('nav').hasClass('menu--collapsed')).toBeTruthy();
  });
  test('Simulate click', () => {
    const selectMenuItem = jest.fn();
    const menu =  mount(
      <Menu menu={[{ id: 1, name: 'name' }]} selectMenuItem={selectMenuItem} />
    );
    menu.find('li').simulate('click');
    expect(selectMenuItem).toHaveBeenCalledTimes(1);
  });
});