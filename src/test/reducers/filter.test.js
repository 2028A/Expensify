import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter value',()=>{
    const state=filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

test('should set sortBy to amount',()=>{
    const state=filtersReducer(undefined,{type:'SET_SORTBY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date',()=>{
    const currentState={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    
    };

    const state=filtersReducer(currentState,{type:'SET_SORTBY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set text filter',()=>{
    const currentState={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    };
    const state=filtersReducer(currentState,{type:'SET_TEXT_FILTER',
    text:'abc'});
    expect(state.text).toBe('abc');
});



test('should set start Date ',()=>{
    const startDate=moment(0).add(4,'days');
    const state=filtersReducer(undefined,{type:'SET_START_DATE',
      startDate:startDate});
    expect(state.startDate).toEqual(startDate);
});


test('should set End Date ',()=>{
    const endDate=moment(0).add(4,'days');
    const state=filtersReducer(undefined,{type:'SET_END_DATE',
      endDate:endDate});
    expect(state.endDate).toEqual(endDate);
});

