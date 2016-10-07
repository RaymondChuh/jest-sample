import React from 'react';
import CheckboxWithLabel from '../src/CheckboxWithLabel';
import {shallow, mount} from 'enzyme';


it('CheckboxWithLabel react component props', () => {
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off"></CheckboxWithLabel>)
  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');
  expect(checkbox.text()).toEqual('On');

});

it('CheckboxWithLabel react component full rendering', () => {
  CheckboxWithLabel.prototype.componentDidMount = jest.fn();
  const checkbox = mount(<CheckboxWithLabel labelOn="On" labelOff="Off"></CheckboxWithLabel>)
  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');
  expect(checkbox.text()).toEqual('On');

  expect(CheckboxWithLabel.prototype.componentDidMount).toHaveBeenCalledTimes(1);
});
