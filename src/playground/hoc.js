//definition higher order component (hoc) - A component that renders another component
import React from 'react';
import ReactDOM from 'react-dom';


const Info=(props)=>(
    <div>
        <h1>info</h1>
        <p>This info is {props.info}</p>
    </div>
);

const withAdminWarning=(WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAdmin && <p>This is private info,  please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}

const requireAuthentication=(WrappedComponent)=>{
    return (props)=>(
        <div>
        {props.isAuthenticated ? <WrappedComponent {...props} />:<p>Please sign in first</p>}
        </div>
    );
};

const AdminInfo=withAdminWarning(Info);
const AuthInfo=requireAuthentication(Info);
//ReactDOM.render(<AdminInfo isAdmin={true} info="There are some details"/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are some details"/>,document.getElementById('app'));
