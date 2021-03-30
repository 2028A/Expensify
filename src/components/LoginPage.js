import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '..//actions/auth';

export const LoginPage=({startLogin})=>(
    <div>
        <button onClick={startLogin}>LogIn</button>
   
    </div>
);

const mapDispatchToProps=(dispath)=>({
  startLogin:()=>dispath(startLogin())
});

export default connect(undefined,mapDispatchToProps)(LoginPage);