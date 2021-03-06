import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';


import { suppressDeprecationWarnings } from 'moment';

class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
    this.state={
        id:props.expense?props.expense.id:'',
        description:props.expense?props.expense.description:'',
        note:props.expense?props.expense.note:'',
        amount:props.expense? (props.expense.amount/100).toString():'',
        createAt:props.expense?moment(props.expense.createAt):moment(),
        calendarFocused:false,
        error:''
    }}
    ;

    onDescriptionChange=(e)=>{
        const description=e.target.value;
        this.setState(()=>({description}));
    };
    onNoteChange=(e)=>{
        const note=e.target.value;
        this.setState(()=>({note}));
    };

    onAmountChange=(e)=>{
        const amount=e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
        {
            this.setState(()=>({amount})); 
        }
    };

    onDateChange=(createAt)=>{
        if(createAt)
        {this.setState(()=>({createAt}));}
    };
    onFocusChange=({focused})=>{
        this.setState(()=>({calendarFocused:focused}));
    };
    onSubmit=(e)=>{
        e.preventDefault();
        if(this.state.description && this.state.amount)
        {
            this.setState(()=>({error:''}));
            this.props.onSubmit({
                description:this.state.description,
                amount:Math.round(parseFloat(this.state.amount,10)*100),
                createAt:this.state.createAt.valueOf(),
                note:this.state.note
            });
        }else
        {
            this.setState(()=>({error:'Please enter descripition and amount'}));
        }
    };
    render(){
        return (
        <form className="form"
        onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
            <input type="text" 
                className="text-input"
                placeholder="Description"
                autoFocus
                value={this.state.description}
                onChange={this.onDescriptionChange}
                />
                <input 
                className="text-input"
                type="text"
                placeholder="Amount"
                value={this.state.amount}
                onChange={this.onAmountChange}
                />
                 <SingleDatePicker
                    date={this.state.createAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>{false}}
                />
                <textarea className="textarea"
                placeholder="Add a note for your expense"
                value={this.state.note}
                onChange={this.onNoteChange}>

                </textarea>
               
                <div>
                <button className="button">{this.state.id===''?"Add":"Save"} Expense</button>
              
                </div>
                
               
               
        </form>
        );
    }
}

export default ExpenseForm;