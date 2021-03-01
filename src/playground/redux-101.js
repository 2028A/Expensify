import {createStore} from 'redux';

//action generator -- function that return action objects
const incrementCount=({incrementBy=1}={})=>{
    return {
        type:'INCREMENT',
        incrementBy
    }

};

const decrementCount=({decrementBy=1}={})=>{
    return {
        type:'DECREMENT',
        decrementBy
    }

};


const reset=()=>(
     {
        type:'RESET'
        
    });


const set=({count=0}={})=>{
    return {
        type:'SET',
        count
    }

};

//Reducer is pure function. (Only use the data passed in)
// never change state or action

const countReducer=(state={count:0},action)=>{
    console.log('running');
    switch (action.type)
    {
        case 'INCREMENT':
            const incrementBy=typeof(action.incrementBy)==='number'?action.incrementBy:1;
            return {count:state.count+incrementBy};
        case 'DECREMENT':
            const decrementBy=typeof action.decrementBy ==='number'?action.decrementBy:1;
            return {count:state.count-decrementBy};
        case 'SET':
              return {count:action.count};
        case 'RESET':
            return {count:0};
        default:
            return state;
    }
    
};

const store=createStore(countReducer);

const unsubscrible=store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy:5}));
/*store.dispatch({
    type:'INCREMENT',
    incrementBy:5
});*/
//unsubscrible();

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:6}));

store.dispatch(reset());

store.dispatch(set({count:1001}));
