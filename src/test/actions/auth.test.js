import {login,logout} from '../../actions/auth';


test('Should login action object',()=>{
   const uid='dadfaerefeefeew';
    const action=login(uid);
   expect(action).toEqual({
       type:'LOGIN',
       uid
   });

});


test('Should logout action object',()=>{
    
     const action=logout();
    expect(action).toEqual({
        type:'LOGOUT' });
 
 });
