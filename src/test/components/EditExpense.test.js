import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpense';
import expenses from '../fixtures/expenses';
let startEditExpense,startRemoveExpense,history,wrapper;

beforeEach(()=>{
   startEditExpense=jest.fn();
    history={push:jest.fn()};
    startRemoveExpense=jest.fn();
    wrapper=shallow(<EditExpensePage 
    expense={expenses[1]}
    startEditExpense={startEditExpense} 
    history={history} 
    startRemoveExpense={startRemoveExpense} />);
});

test('Should render Edit ExpenseForm correctly',()=>{
 
   expect(wrapper).toMatchSnapshot();
})

test('Should handle onSubmit at start Edit Expense correctly',()=>{
   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);
})

test('Should handle startRemoveExpense at Edit ExpenseForm correctly',()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[1].id});
 })
