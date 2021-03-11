import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
//react-test-renderer

test('Should render expenses Summary with expenses',()=>{
    const wrapper=shallow(<ExpensesSummary expensesCount={4} expensesTotal={5454544} />);
    expect(wrapper).toMatchSnapshot();
   
})

test('Should render expenses Summary with one expenses',()=>{
    const wrapper=shallow(<ExpensesSummary expensesCount={1} expensesTotal={54544}  />);
    expect(wrapper).toMatchSnapshot();
   
})