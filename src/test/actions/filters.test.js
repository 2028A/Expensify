import moment from 'moment';
import {setTextFilter,setSortByDate, setSortByAmount,setStartDate,
 setEndDate} from '../../actions/filters';

 test('Should generate setStartDate action object',()=>{
     const startDate=moment(0);
     const action=setStartDate(startDate);
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate
    });

 });

 test('Should generate setEndDate action object',()=>{
    const endDate=moment();
    const action=setEndDate(endDate);
   expect(action).toEqual({
       type:'SET_END_DATE',
       endDate
   });
});


test('Should generate setTextFilter action object',()=>{
    const action=setTextFilter('abc');
   expect(action).toEqual({
       type:'SET_TEXT_FILTER',
       text:'abc'
   });

});


test('Should generate setTextFilter action object without value',()=>{
    const action=setTextFilter();
   expect(action).toEqual({
       type:'SET_TEXT_FILTER',
       text:''
   });

});


test('Should generate setSortByDate action object',()=>{
    const action=setSortByDate();
   expect(action).toEqual({
       type:'SET_SORTBY_DATE'
       
   });

});


test('Should generate setSortByAmount action object',()=>{
    const action=setSortByAmount();
   expect(action).toEqual({
       type:'SET_SORTBY_AMOUNT'
       
   });

});

