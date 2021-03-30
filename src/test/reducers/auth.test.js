import authReducer from '../../reducers/auth';


test('should  login successfully',()=>{
    const uid="adfaerewdfee";
    const action={
        type:'LOGIN',
        uid
    };
    const state=authReducer({},action)
    expect(state.uid).toEqual(action.uid);
});

test('should  logout successfully',()=>{
   
    const action={
        type:'LOGOUT'
    };
    const state=authReducer({},action)
    expect(state).toEqual({});
});
