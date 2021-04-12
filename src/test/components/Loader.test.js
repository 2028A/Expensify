import React from 'react';
import {shallow} from 'enzyme';
import LoadingPage from '../../components/LoadingPage';

test('Should render loader page correctly',()=>{
   
    var wrapper=shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
 
})