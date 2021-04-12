import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {startLogout} from '../actions/auth';

export const Header=({startLogout})=>(
    <header className="header">
       <div className="content-container">
       <div className="header__content">
        <Link to="/dashboard" className="header__title">
        <h1 >Expensify</h1></Link>
        
        <button onClick={startLogout}>Logout</button>
        </div>
        </div>
    </header>
    );


    const mapDispatchToProps=(dispath)=>({
        startLogout:()=>dispath(startLogout())
      });
      
      export default connect(undefined,mapDispatchToProps)(Header);
      