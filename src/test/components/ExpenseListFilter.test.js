import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import {ExpenseListFilters} from '../../components/ExpenseListFilter';
import {filters, altFilters} from '../fixtures/filter';

let setStartDate,setEndDate,setTextFilter,setSortByAmount,setSortByDate,wrapper

beforeEach(()=>{
    setStartDate=jest.fn();
    setEndDate=jest.fn();
    setTextFilter=jest.fn();
    setSortByAmount=jest.fn();
    setSortByDate=jest.fn();

    wrapper=shallow(<ExpenseListFilters 
        setStartDate={setStartDate} 
        setEndDate={setEndDate}
        setTextFilter={setTextFilter}
        setSortByAmount={setSortByAmount}
        setSortByDate={setSortByDate}
        filters={filters}
        />);

});

test('should render Filter List Page correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should render Filter List Page with alt correctly',()=>{
    wrapper.setProps({filters:altFilters});
    expect(wrapper).toMatchSnapshot();
});


test('should handle text change ',()=>{
    const value='rent';
    wrapper.find('input').simulate('change',{
        target:{value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle sortBy Date change ',()=>{
    const value='date'
    wrapper.setProps({filters:altFilters});
    wrapper.find('select').simulate('change',{
        target:{value}
    });

    expect(setSortByDate).toHaveBeenCalled();

});
test('should handle sortBy Amount change ',()=>{
    const value='amount'
  
    wrapper.find('select').simulate('change',{
        target:{value}
    });

    expect(setSortByAmount).toHaveBeenCalled();

});


test('should handle date change ',()=>{
    const startDate=moment(0).add(4,'years');
    const endDate=moment(0).add(8,'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate,endDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes',()=>{
    const calendarFocused="endDate";
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
})
