
export default (expenses=[])=>{
   
   
 /*
    var total=0;
        expenses.map((expense)=>{
            total+= expense.amount;
        });
     */
    var total=expenses.map((expense)=>expense.amount)
    .reduce((sum,value)=>sum+value,0);
      return total;
    
   
};