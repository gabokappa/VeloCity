import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Testing the App Component', () => {
   
  it('renders without crashing', () => {
     shallow(<App />);
   });
});