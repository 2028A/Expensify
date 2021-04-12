import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary=({expensesCount,expensesTotal})=>{
    const expenseWord=expensesCount<=1 ? 'expense':'expenses';
    const formmatedExpenseTotal=numeral(expensesTotal/100).format('$0,0.00');
    return (
    <div className="page-header">
    <div className="content-container">
    <h1 className="page-header__title">View <span>{expensesCount} {expenseWord}</span> totaling <span>{formmatedExpenseTotal}</span></h1>
    <div className="page-header__actions">
        <Link to="/create" className="button">Add Expense</Link>
    </div>
    </div>
        
    </div>
    );
}

const mapStateToProps=(state)=>{
    const visibleExpenses=selectExpenses(state.expenses,state.filters);
    return {
        expensesCount:visibleExpenses.length,
        expensesTotal:selectExpensesTotal(visibleExpenses)
    }
    
};

export default connect(mapStateToProps)(ExpensesSummary);