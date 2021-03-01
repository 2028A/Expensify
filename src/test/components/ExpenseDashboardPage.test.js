import React from 'react';
import {shallow} from 'enzyme';
import ExpensifyDashboardPage from '../../components/Dashboard';

test('Should render dahsboard page correctly',()=>{
    const wrapper=shallow(<ExpensifyDashboardPage />);
     expect(wrapper).toMatchSnapshot();
 })


