import React from 'react';
import { shallow } from 'enzyme';
import AppContainer from './AppContainer';
import Header from 'components/Header/Header';

it('renders without crashing', () => {
  shallow(<AppContainer />);
});

it('includes Header', () => {
    const appCont = shallow(<AppContainer />);
    expect(appCont.containsMatchingElement(<Header />)).toEqual(true)
  });