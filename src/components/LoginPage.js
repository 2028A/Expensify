import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage=({startLogin})=>(
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify App</h1>
        <p>Is time to get your expenses under control</p>
      
        <button className="button" onClick={startLogin}>LogIn</button>
        </div>
    </div>
);

const mapDispatchToProps=(dispath)=>({
  startLogin:()=>dispath(startLogin())
});

export default connect(undefined,mapDispatchToProps)(LoginPage);
