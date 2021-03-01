
export const setTextFilter=(text='')=>({
    type:'SET_TEXT_FILTER',
    text
  
});

export const setSortByDate=()=>({
   type:'SET_SORTBY_DATE'
 
});

export const setSortByAmount=()=>({
   type:'SET_SORTBY_AMOUNT'
 
});

export const setStartDate=(startDate)=>({
   type:'SET_START_DATE',
   startDate
 
});


export const setEndDate=(endDate)=>({
   type:'SET_END_DATE',
   endDate
 
});
