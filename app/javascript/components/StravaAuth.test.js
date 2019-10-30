import React from 'react';
import { shallow } from 'enzyme';
import { render } from 'enzyme';
import { expect } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import StravaAuth from './StravaAuth';

configure({ adapter: new Adapter() });

describe('Testing the StravaAuth Component', () => {
   
  it('renders without crashing', () => {
    shallow(<StravaAuth />);
  });

  it('renders the title', () => {
    const testfile = render(<StravaAuth />);
    expect(testfile.text()).to.contain('Strava data');
  });

  it('check the componentDidMount Method', () => {
    let stravaClass = new StravaAuth(); 
    expect(stravaClass.componentDidMount()).to.equal("Hello");
  });
});