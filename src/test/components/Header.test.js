import React from 'react';
import {shallow} from 'enzyme';
//import toJSON from 'enzyme-to-json';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';
//react-test-renderer

test('Should render header correctly',()=>{
    const wrapper=shallow(<Header />);
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot();
    //const renderer=new ReactShallowRenderer();
//renderer.render(<Header />);
//expect(renderer.getRenderOutput()).toMatchSnapshot();
})
