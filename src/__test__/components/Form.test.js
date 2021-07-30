import { mount } from 'enzyme';
import Form from '../../components/Form';

describe('Form', () => {
  test('Form is rendering', () => {
    const form =  mount(<Form currentMenuItem={{}} formValue={{}}/>);
    expect(form.length).toEqual(1);
  });
});