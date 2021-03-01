import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpense';
import expenses from '../fixtures/expenses';
let editExpense,removeExpense,history,wrapper;

beforeEach(()=>{
    editExpense=jest.fn();
    history={push:jest.fn()};
    removeExpense=jest.fn();
    wrapper=shallow(<EditExpensePage 
    expense={expenses[1]}
    editExpense={editExpense} 
    history={history} 
     removeExpense={removeExpense} />);
});

test('Should render Edit ExpenseForm correctly',()=>{
 
   expect(wrapper).toMatchSnapshot();
})

test('Should handle onSubmit at Edit ExpenseForm correctly',()=>{
   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);
})

test('Should handle removeExpense at Edit ExpenseForm correctly',()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[1].id});
 })