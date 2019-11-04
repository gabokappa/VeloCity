import React from 'react';
import { shallow } from 'enzyme';
import { render } from 'enzyme';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Bikes from './Bikes';

configure({ adapter: new Adapter() });

xdescribe('Testing the Bike component', () => {
  it('renders without crashing', () => {
    shallow(<Bikes />);
  })
});
