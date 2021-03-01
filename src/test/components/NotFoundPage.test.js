import React from 'react';
import {shallow} from 'enzyme';
import NotFoundPage from '../../components/NotFound';

test('Should render NotFound page correctly',()=>{
    const wrapper=shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
   
})