import firebase from "firebase";
import moment from "moment";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database=firebase.database();
  export {firebase,database as default}
 /*
  database.ref('expenses').push(
  {id:'1',
  description:'Gum',
  note:'',
  amount:195,
  createAt:moment(123).valueOf()}
  );
  database.ref('expenses').push(
    {id:'2',
    description:'Rent',note:'',
    amount:19500,
    createAt:moment(0).subtract(4,'days').valueOf()
  });
    database.ref('expenses').push(
    {id:'3',
    description:'Credit Card',
    note:'',amount:4500,
    createAt:moment(0).add(4,'days').valueOf()}
    );
    

 database.ref('expenses').once('value')
 .then((snapshot)=>{
   const expenses=[];
   snapshot.forEach((childSnapshot)=>{
      expenses.push({
        id:childSnapshot.key,
        ...childSnapshot.val()
      });
   });
   console.log(expenses);
 });

 
const onValueChange=(snapshot)=>{

  console.log(snapshot.key,snapshot.val());
};

database.ref('expenses').on('value',onValueChange);
database.ref('expenses').on('child_removed',(snapshot)=>{
  console.log(snapshot.key,snapshot.val());
});
database.ref('expenses').on('child_changed',(snapshot)=>{
  console.log(snapshot.key,snapshot.val());
});
database.ref('expenses').on('child_added',(snapshot)=>{
  console.log(snapshot.key,snapshot.val());
});

  database.ref().set({
    name:'Lijun Jiang',
    job:'Software developer',
    age:24,
    company:'Amzaon',
    location:{
      city:'Keller',
      State:'TX',
      Zip:'76248'
    }
  }

  ).then(()=>{
    console.log("Data is saved");
  }).catch((error)=>
  {
    console.log('error',error);
  });

  database.ref().update({
    job:'Manager',
    age:25,
    isSingle:null,
    'location/city':'SouthLake',      
    'location/Zip':'76246'
    
  }

  ).then(()=>{
    console.log("Data is saved");
  }).catch((error)=>
  {
    console.log('error',error);
  });

var isSingleRef=database.ref('isSingle');
isSingleRef.remove().then(()=>{
  console.log("Remove succeeded");
}).catch((error)=>{
  console.log("Remove failed:"+error.message);
});


database.ref()
.remove().then(()=>{
  console.log("Remove succeeded");
}).catch((error)=>{
  console.log("Remove failed:"+error.message);
});


//fetch data
database.ref('location').once('value')
.then((response)=>{
  const val=response.val();
  console.log(val);
})
.catch((e)=>{
  console.log("Fetch error:"+e.message);
});

//subscription for changes


const onValueChange=(snapshot)=>{
  var data=snapshot.val();
  console.log(`${data.name} is a ${data.job} at ${data.company}`);
};

database.ref().on('value',onValueChange);
//unsubscribe
//database.ref().off('value',onValueChange);

setTimeout(()=>{
  database.ref().update({
    age:31
  });
});
*/