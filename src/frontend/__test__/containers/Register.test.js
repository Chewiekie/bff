import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Register from '../../containers/Register';

describe('Register component', () => {
  test('Matches the snapshot', () => {
    const register = create(
      <ProviderMock>
        <Register />
      </ProviderMock>,
    );
    expect(register.toJSON()).toMatchSnapshot();
  });

  it('Calls and Executes preventDefault function when Register form is submitted', () => {
    const preventDefault = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Register />
      </ProviderMock>,
    );
    wrapper.find('form').simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

});