import React from 'react';
import {BrowserRouter, Route,Switch, Link, NavLink} from 'react-router-dom';
import ExpensifyDashboardPage from '../components/Dashboard';
import AddExpensifyPage from '../components/AddExpense';
import EditExpensifyPage from '../components/EditExpense';
import ExpensifyHelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';
import Header from '../components/Header';

const AppRouter=()=>(
<BrowserRouter>
<div>
<Header/>
<Switch>
    <Route path="/" component={ExpensifyDashboardPage} exact={true}/>
    <Route path="/create" component={AddExpensifyPage} />
    <Route path="/edit/:id" component={EditExpensifyPage} />
    <Route path="/help" component={ExpensifyHelpPage} />
    <Route component={NotFoundPage} />
    </Switch>
   
</div>
  
</BrowserRouter>
);

export default AppRouter;