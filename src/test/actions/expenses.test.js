import {addExpense,editExpense,removeExpense} from '../../actions/expenses';

test('Should set up remove expense action object',()=>{
    const action=removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    });
});

test('Should set up edit expense action object',()=>{
  
   const action=editExpense('123abc',{description:'test'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
       id:'123abc',
       updates:{description:'test'}
    });
});

test('Should set up add expense action object with provided values',()=>{
   const expensedata={
       description:'test',
       note:'test note',
       amount:120,
       createAt:12340
  };
    const action=addExpense(expensedata);
     expect(action).toEqual({
         type:'ADD_EXPENSE',
        expense:{
        id:expect.any(String),
        ...expensedata
        }
     });
 });


 test('Should set up add expense action object without data',()=>{
    const expensedata={
        description:'',
        note:'',
        amount:0,
        createAt:0
   };
     const action=addExpense();
      expect(action).toEqual({
          type:'ADD_EXPENSE',
         expense:{
         id:expect.any(String),
         ...expensedata
         }
      });
  });