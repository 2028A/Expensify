import {createStore,combineReducers} from 'redux';
import {v4 as uuid} from 'uuid';
//Add Expense
const addExpense=({description='',
    note='',
    amount=0,
    createAt=0
   }={}
   )=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createAt
    }
});

const removeExpense=(({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
}));

const editExpense=(id,updates
   )=>({
    type:'EDIT_EXPENSE',
    expense:{
        id,
        updates
    }
});

const setTextFilter=(text='')=>({
     type:'SET_TEXT_FILTER',
     text
   
 });

 const setSortByDateFilter=()=>({
    type:'SET_SORTBY_DATE'
  
});
 
const setSortByAmountFilter=()=>({
    type:'SET_SORTBY_AMOUNT'
  
});

const setStartDate=(startDate)=>({
    type:'SET_START_DATE',
    startDate
  
});


const setEndDate=(endDate)=>({
    type:'SET_END_DATE',
    endDate
  
});


//Expense Reducer
const expensesReducerDefaultState=[];
const filtersReducerDefaultState={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined

};
const expensesReducer=(state=expensesReducerDefaultState,action)=>{
    switch(action.type)
    {
        case 'ADD_EXPENSE':
            return [...state,action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>id!==action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id===action.expense.id){
                    return {
                        ...expense,
                        ...action.expense.updates
                    }
                   
                }
                else
                return expense;
            });     
        default:
            return state;
    }
};

const filtersReducer=(state=filtersReducerDefaultState,action)=>{
    switch(action.type)
    {
        case 'SET_TEXT_FILTER':
            return { ...state, text:action.text};
        case 'SET_SORTBY_DATE':
            return { ...state, sortBy:'date'};    
        case 'SET_SORTBY_AMOUNT':
            return {...state,sortBy:'amount'}
        case 'SET_START_DATE':
            return {...state,startDate:action.startDate} 
        case 'SET_END_DATE':
            return {...state,endDate:action.endDate}   
        default:
            return state;
    }
};

const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{

    return expenses.filter((expense)=>{
        const startDateMatch= typeof startDate !=='number' || expense.createAt>=startDate;
        const endDateMatch= typeof endDate !=='number' || expense.createAt<=endDate;
        const textMatch= expense.description.toLowerCase().includes(text.toLowerCase());
       
        return startDateMatch && endDateMatch && textMatch;

    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createAt < b.createAt ? 1:-1;
        }else
            return a.amount < b.amount ? 1:-1;
    });
};

const store=createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    }));
store.subscribe(()=>{
    const state=store.getState();
    console.log(state.filters);
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

const expenseOne=store.dispatch(addExpense({description:'Office Rent',amount:4567809,createAt:1238}));
const expenseTwo=store.dispatch(addExpense({description:'Gas ',amount:56780,createAt:899}));
store.dispatch(setSortByAmountFilter());
//store.dispatch(setTextFilter('Rent'));
//store.dispatch(setStartDate(1232));
//store.dispatch(setEndDate(1234));
//store.dispatch(removeExpense({id:expenseOne.expense.id}));
/*store.dispatch(editExpense(expenseTwo.expense.id,{amount:456}));
store.dispatch(setTextFilter('Rent'));
store.dispatch(setTextFilter(''));
store.dispatch(setSortByDateFilter());
store.dispatch(setSortByAmountFilter());
store.dispatch(setStartDate(1234));
store.dispatch(setEndDate(4567));
*/
const demoState={
    expenses:[{
        id:'adfsdfsf',
        description:'January Rent',
        note:'This is final payment',
        amount: 56790,
        createAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount', //date or amount
        startDate:undefined,
        endDate:undefined
    }
};

