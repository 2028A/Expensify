import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';


test('Should filter by text value',()=>{
    const filter={
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(expenses,filter);
    expect(result).toEqual([expenses[2],expenses[1]]);

});

test('Should filter by startDate value',()=>{
    const filter={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result=selectExpenses(expenses,filter);
    expect(result).toEqual([expenses[2],expenses[0]]);

});
test('Should filter by EndDate value',()=>{
    const filter={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0).add(3,'days')
    }
    const result=selectExpenses(expenses,filter);
    expect(result).toEqual([expenses[0],expenses[1]]);

});

test('Should filter by EndDate value sorted by Amount',()=>{
    const filter={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:moment(0).add(3,'days')
    }
    const result=selectExpenses(expenses,filter);
    expect(result).toEqual([expenses[1],expenses[0]]);

});