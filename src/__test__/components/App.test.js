import { mount } from 'enzyme';
import App from '../../components/App';

describe('App', () => {
  test('App is rendering', () => {
    const app =  mount(<App />);
    expect(app.length).toEqual(1);
  });
  test('Simulate submit form with empty fields', () => {
    const app =  mount(<App />);
    app.find('form').simulate('submit');
    expect(app.find('.form__error').at(0).text()).toEqual('Campo requerido');
  });
  test('Simulate open menu click', () => {
    const app =  mount(<App />);
    app.find('button').at(0).simulate('click');
    expect(app.find('nav').hasClass('menu')).toBeTruthy();
  });
  test('Simulate name input change', () => {
    const app =  mount(<App />);
    let input = app.find('input').at(0);
    input.simulate('change', {
      target: {
        value: 'name!',
        name: 'name'
      }
    });
    input = app.find('input').at(0);
    expect(input.prop('value')).toEqual('name!');
  });
  test('Simulate email input change', () => {
    const app =  mount(<App />);
    let input = app.find('input').at(1);
    input.simulate('change', {
      target: {
        value: 'email@email',
        name: 'email'
      }
    });
    input = app.find('input').at(1);
    expect(input.prop('value')).toEqual('email@email');
  });
  test('Simulate phone input change', () => {
    const app =  mount(<App />);
    let input = app.find('input').at(2);
    input.simulate('change', {
      target: {
        value: '-32',
        name: 'phone'
      }
    });
    input = app.find('input').at(2);
    expect(input.prop('value')).toEqual('-32');
  });
  test('Simulate age input change', () => {
    const app =  mount(<App />);
    let input = app.find('input').at(3);
    input.simulate('change', {
      target: {
        value: '17',
        name: 'age'
      }
    });
    input = app.find('input').at(3);
    expect(input.prop('value')).toEqual('17');
  });
});