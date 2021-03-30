import React from 'react';
import {createBrowserHistory}   from 'history';
import {Router,Switch } from 'react-router-dom';
import ExpensifyDashboardPage from '../components/Dashboard';
import AddExpensifyPage from '../components/AddExpense';
import EditExpensifyPage from '../components/EditExpense';
import ExpensifyHelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();
const AppRouter=()=>(
<Router history={history} >
<div>
<Switch>
    <PublicRoute path="/" component={LoginPage} exact={true}/>
    <PrivateRoute path="/dashboard" component={ExpensifyDashboardPage} />
    <PrivateRoute path="/create" component={AddExpensifyPage} />
    <PrivateRoute path="/edit/:id" component={EditExpensifyPage} />
    <PrivateRoute component={NotFoundPage} />
    </Switch>
   
</div>
  
</Router>
);

export default AppRouter;