import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter,setSortByDate,setSortByAmount,setStartDate,setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';


export class ExpenseListFilters extends React.Component{
  constructor(props){
    super(props);
    this.state={
      calendarFocused:null
    }
  }

 
onDatesChange=({startDate,endDate})=>{
  this.props.setStartDate(startDate);
  this.props.setEndDate(endDate);
};
onFocusChange=(calendarFocused)=>{
    this.setState(()=>({calendarFocused}));
};

onSortChange=(e)=>{
  if(e.target.value==="date")
  {
    this.props.setSortByDate();
  }
  else
  {
    this.props.setSortByAmount();
  }
}
 
onTextChange=(e)=>{
   this.props.setTextFilter(e.target.value);
};
 render(){
   return(
    <div className="content-container">
      <div className="input-group">
      <div className="input-group__item">
        <input type="text" 
        className="text-input"
        placeholder="Search expenses"
        value={this.props.filters.text}
            onChange={this.onTextChange}
        />
        </div>
        <div className="input-group__item">
        <select className="select"
        onChange={this.onSortChange}
            value={this.props.filters.sortBy}>
            <option value="date">Date</option>
            <option value='amount'>Amount</option>
        </select>
        </div>
        <div className="input-group__item">
    <DateRangePicker 
      startDate={this.props.filters.startDate}
      endDate={this.props.filters.endDate}
      onDatesChange={this.onDatesChange}
      focusedInput={this.state.calendarFocused}
      onFocusChange={this.onFocusChange}
      showClearDates={true}
      numberOfMonths={1}
      isOutsideRange={()=>{false}}
    />
    </div>
      </div>
    </div>
    
)};

}
const mapStoreToProps=(state)=>({
         filters:state.filters
    }
);
const mapDispatchToProps=(dispatch)=>({
  setStartDate:(startDate)=>dispatch(setStartDate(startDate)),
  setEndDate:(endDate)=>dispatch(setEndDate(endDate)),
  setSortByDate:()=>dispatch(setSortByDate()),
  setSortByAmount:()=>dispatch(setSortByAmount()),
  setTextFilter:(text)=>dispatch(setTextFilter(text))
});
export default connect(
    mapStoreToProps,mapDispatchToProps)(ExpenseListFilters);

