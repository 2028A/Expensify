
export default (expenses)=>{
    if(expenses.length===0)
        return 0;
    else{

const total=0;
        expenses.map((expense)=>{
            total+=expense.Amount;
        });
      return total;
    }
   
};