import React from 'react';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary=(props)=>(
    <div>
    {
        props.expenses.length<=1?(
            <p>View {props.expenses.length} expense totaling {numeral(selectExpensesTotal(props.expenses)/100).format('$0,0.00')}</p>
        ):(
           
            <p>View {props.expenses.length} expenses totaling {numeral(selectExpensesTotal(props.expenses)/100).format('$0,0.00')}</p>
        )
    }</div>
)
const mapStateToProps=(state)=>{
    return {
        expenses:selectExpenses(state.expenses,state.filters)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);