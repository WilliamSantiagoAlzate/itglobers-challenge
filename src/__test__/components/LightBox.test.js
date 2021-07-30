import { mount } from 'enzyme';
import LightBox from '../../components/LightBox';

describe('LightBox', () => {
  test('LightBox is rendering', () => {
    const lightbox =  mount(<LightBox />);
    expect(lightbox.length).toEqual(1);
  });
});