import configureMockStore from 'redux-mock-store';
import thunk  from 'redux-thunk';
import {startAddExpense,addExpense,editExpense,removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore=configureMockStore([thunk]);

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
   const expensedata=expenses[0];
    const action=addExpense(expensedata);
     expect(action).toEqual({
         type:'ADD_EXPENSE',
        expense:expensedata
        
     });
 });

 test('Should add expense to database and store',(done)=>{
     const store=createMockStore({});
     const expenseData={
         description:'Rent',
         note:'test note',
         amount:123400,
         createAt:1000
     };

     store.dispatch(startAddExpense(expenseData)).then((data)=>{
         const actions=store.getActions();
         expect(actions[0]).toEqual({
             type:'ADD_EXPENSE',
             expense:{
                id:expect.any(String), 
                ...expenseData}
         });
        return database.ref(`expenses/${actions[0].expense.id}`)
        .once('value');
         

         
     }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
     });;
   
  });

 test('Should save default data object without data',(done)=>{
    const store=createMockStore({});
    const expenseDefault={
        description:'',
        note:'',
        amount:0,
        createAt:0
    };

    store.dispatch(startAddExpense({})).then((data)=>{
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
               id:expect.any(String), 
               ...expenseDefault}
        });
       return database.ref(`expenses/${actions[0].expense.id}`)
       .once('value');
        

        
    }).then((snapshot)=>{
       expect(snapshot.val()).toEqual(expenseDefault);
       done();
    });;
  
  });
  