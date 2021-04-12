import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter,{history} from './routers/AppRouter';
import configStore from './store/configStore';
import {startSetExpenses} from './actions/expenses';
import {login,logout} from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage'

var appRoot=document.getElementById("app");

const store=configStore();

const jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
let hasRendered=false;
const renderApp=()=>{
    if(!hasRendered)
    {
        ReactDOM.render(jsx,appRoot);
        hasRendered=true;
    }
}
ReactDOM.render(<LoadingPage />,appRoot);

firebase.auth().onAuthStateChanged((user)=>{
    if(user)
    {
    // console.log('uid',user.uid);   
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(()=>{
        renderApp();
        if(history.location.pathname==='/'){
            history.push('/dashboard');
        }
});

       
    }
    else
    {
        console.log("logout");
        store.dispatch(logout());
        renderApp();
        
        history.push('/');
    }
});

