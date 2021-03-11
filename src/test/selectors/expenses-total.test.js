import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return total of 0 when expenses is empty',()=>{
    var emptyExpenses=[];
    const result=selectExpensesTotal(emptyExpenses);
    expect(result).toBe(0);

});

test('Should return total of 0 when expenses is not empty',()=>{
    
    const result=selectExpensesTotal(expenses);
    expect(result).toBe(24195);

});

test('Should return total of correct amount when expenses is only one',()=>{
    

    const result=selectExpensesTotal([expenses[0]]);
    expect(result).toBe(expenses[0].amount);

});