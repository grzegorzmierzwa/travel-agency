import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';


describe('Component TripSummary', () => {

  it('should render without crashing', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='alt' days={1} tags={[]} cost='cost'/>);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });



});