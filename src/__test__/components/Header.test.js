import { mount } from 'enzyme';
import Header from '../../components/Header';

describe('Header', () => {
  test('Header is rendering', () => {
    const header =  mount(<Header />);
    expect(header.length).toEqual(1);
  });
});