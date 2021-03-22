import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set up default state',()=>{
    const state=expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});


test('should remove expense',()=>{
    const state=expensesReducer(expenses,{
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    })
    expect(state).toEqual([expenses[0],expenses[2]]);
});


test('should not remove expense is id not found',()=>{
    const state=expensesReducer(expenses,{
        type:'REMOVE_EXPENSE',
        id:'-1'
    })
    expect(state).toEqual(expenses);
});


test('should Add expense',()=>{
    const expense={description:'test Add',note:'',amount:295,createAt:20000};
    const action={
        type:'ADD_EXPENSE',
        expense
    };
    const state=expensesReducer(expenses,action)
    expect(state).toEqual([...expenses,expense]);
});

test('should edit expense with valid id',()=>{
    const amount=1295;
    const action={
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{amount}
    };
    const state=expensesReducer(expenses,action)
    expect(state[1].amount).toBe(amount);
});

test('should not edit expense with invalid id',()=>{
    const amount=1295;
    const action={
        type:'EDIT_EXPENSE',
        id:'-1',
        updates:{amount}
    };
    const state=expensesReducer(expenses,action)
    expect(state).toEqual(expenses);
});

test('should set expenses with correctly',()=>{
  
    const action={
        type:'SET_EXPENSES',
        expenses:[expenses[1]]
    };
    const state=expensesReducer(expenses,action)
    expect(state).toEqual([expenses[1]]);
});