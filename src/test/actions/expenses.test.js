import configureMockStore from 'redux-mock-store';
import thunk  from 'redux-thunk';
import {startAddExpense,addExpense,editExpense,removeExpense,
    setExpenses,startSetExpenses,startRemoveExpense,
    startEditExpense
    } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore=configureMockStore([thunk]);
beforeEach((done)=>{
    const expensesData={};
    expenses.forEach(({id,description,amount,note,createAt})=>{
        expensesData[id]={description,amount,note,createAt};
    });
    database.ref('expenses').set(expensesData).then(()=>done());;
});

test('Should set up remove expense action object',()=>{
    const action=removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    });
});

test('should remove the expense from database',(done)=>{
    const store=createMockStore({});
    const id=expenses[1].id;
    store.dispatch(startRemoveExpense({id})).then(()=>{
        const actions =store.getActions();
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value');
       
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
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

test('Should update expense in firebase',(done)=>{
    const store=createMockStore({});
    const id=expenses[2].id;
    const updates={
        description:'Rent',
        note:'test note',
        amount:123400,
        createAt:1000
    };

    store.dispatch(startEditExpense(id,updates)).then(()=>{
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type:'EDIT_EXPENSE',
            id,
            updates
        });
       return database.ref(`expenses/${id}`)
       .once('value');
    }).then((snapshot)=>{
        
       expect(snapshot.val()).toEqual(updates);
       done();
    });;
  
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
  
  test('should setup Set Expenses action object data',()=>{
        const action=setExpenses(expenses);
        expect(action).toEqual({
            type:'SET_EXPENSES',
           expenses
           
        });
  });

  test('should fetch the expenses from database',(done)=>{
    const store=createMockStore({});
    store.dispatch(startSetExpenses()).then(()=>{
        const actions =store.getActions();
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        });
        done();
    });
});


