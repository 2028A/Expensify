import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('Should render expenseForm correctly',()=>{
    const wrapper=shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test('Should render expenseForm with expense data',()=>{
    const wrapper=shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form submission',()=>{
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit',{preventDefault:()=>{}});

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change',()=>{
    const value='test description';
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{target:{value}});

    expect(wrapper.state('description')).toBe(value);
    
});

test('should set note on textarea change',()=>{
    const value='test area notes';
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change',{target:{value}});

    expect(wrapper.state('note')).toBe(value);
    
});

test('should set amount on valid input change',()=>{
    const value='12.34';
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{target:{value}});

    expect(wrapper.state('amount')).toBe(value);
    
});

test('should not set amount on invalid input change',()=>{
    const value='12.345';
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{target:{value}});

    expect(wrapper.state('amount')).toBe('');
    
});

test('Should call onSubmit prop for valid form submission',()=>{
    const onSubmitSpy=jest.fn();
    const wrapper=shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit',{preventDefault:()=>{}});
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        note:expenses[0].note,
        createAt:expenses[0].createAt
    });
});

test('should set new date onDateChange',()=>{
    const now=moment();
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createAt')).toBe(now);
});

test('should set foucus state onFocusChange',()=>{
    const focused=true;
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
});