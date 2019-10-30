import React from 'react';
import { shallow } from 'enzyme';
import { render } from 'enzyme';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Heading from './Heading';

configure({ adapter: new Adapter() });

describe('Testing the App Component', () => {
   
  it('renders without crashing', () => {
    shallow(<Heading />);
  });

  it('renders the title', () => {
    const testfile = render(<Heading />);
    expect(testfile.text()).to.contain('VeloCity Application');
  });


});