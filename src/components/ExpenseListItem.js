//export a stateless functional component
//
import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const  ExpenseListItem= ({id,description,amount,createAt})=>(
    <div>
       <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        
        <p>{amount} - {moment(createAt).format('MM-DD-YYYY')} </p>
       
    </div>
);


export default ExpenseListItem