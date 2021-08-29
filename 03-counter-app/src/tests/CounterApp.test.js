import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';
import { stringify } from 'json5';

describe('tests in CounterApp component', () => {

    let wrapper; // in this moment, its value is undefined, you could initialize it as the content so you don't lose vscode autocomplete even though it's not as clean.

    beforeEach(() => {
        wrapper = shallow(<CounterApp/>);
    });

    test('should render <CounterApp /> component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should show a value of 100', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value}/>);
        const element = wrapper.find('p').text().trim();
        expect(element).toBe(`${value}`);
    });

    test('should increment value by 1', () => {
        wrapper.find('button').at(0).simulate('click');
        const element = wrapper.find('p').text().trim();
        expect(element).toBe('1');
    })

    test('should decrement value by 1', () => {
        wrapper.find('button').at(1).simulate('click');
        const element = wrapper.find('p').text().trim();
        expect(element).toBe('-1');
    });

    test('should reset value to prop value', () => {
        const value = 105;
        const wrapper = shallow(<CounterApp value={value}/>);
        wrapper.find('button').at(2).simulate('click');
        const element = wrapper.find('p').text().trim();
        expect(element).toBe(stringify(value));


    })

})