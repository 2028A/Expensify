import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configStore from './store/configStore';
import {addExpense} from './actions/expenses';
import {setSortByAmount, setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
//import React from 'react';

var appRoot=document.getElementById("app");

const store=configStore();

store.dispatch(addExpense({description:'Office Rent',amount:14500,createAt:1238}));
store.dispatch(addExpense({description:'Gas Bill',amount:56780,createAt:899}));
store.dispatch(addExpense({description:'Water Bill',amount:26780,createAt:1899}));
const jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx,appRoot);
