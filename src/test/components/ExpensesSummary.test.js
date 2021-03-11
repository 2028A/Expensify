import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
//react-test-renderer

test('Should render expenses Summary with expenses',()=>{
    const wrapper=shallow(<ExpensesSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
   
})

test('Should render expenses Summary with empty expenses',()=>{
    const wrapper=shallow(<ExpensesSummary expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
   
})

test('Should render expenses Summary with one expenses',()=>{
    const wrapper=shallow(<ExpensesSummary expenses={[expenses[0]]} />);
    expect(wrapper).toMatchSnapshot();
   
})