import React from 'react';
import {shallow} from 'enzyme';
//import toJSON from 'enzyme-to-json';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import {Header} from '../../components/Header';
//react-test-renderer
let startLogout, wrapper;

beforeEach(()=>{
    startLogout=jest.fn();
    
     wrapper=shallow(<Header 
     startLogout={startLogout} />);
 });


test('Should render header correctly',()=>{
   
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot();
    //const renderer=new ReactShallowRenderer();
//renderer.render(<Header />);
//expect(renderer.getRenderOutput()).toMatchSnapshot();
})


test('Should render Login button click correctly',()=>{
  
    wrapper.find('button').simulate('click');
    
    expect(startLogout).toHaveBeenCalled();
    
})
