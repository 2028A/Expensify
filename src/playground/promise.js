//promise is used to make long async call

const promise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
       // resolve('This is my resloved data'); 
        reject('This is my reject data');
    },1500);

   

});
console.log("before");

promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log('error',error);
});

console.log("after");