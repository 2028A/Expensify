import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return total of 0 when expenses is empty',()=>{
    var emptyExpenses=[];
    const result=selectExpensesTotal(emptyExpenses);
    expect(result).toBe(0);

});
