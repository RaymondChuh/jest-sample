import React from 'react';
import CheckboxWithLabel from '../src/CheckboxWithLabel';
import {shallow} from 'enzyme';


test('CheckboxWithLabel', () => {
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off"></CheckboxWithLabel>)
  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');
  expect(checkbox.text()).toEqual('On');
})
