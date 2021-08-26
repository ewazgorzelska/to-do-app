import React from 'react';
import { shallow } from 'enzyme';
import Statistics from './Statistics';

it('shows message when there are no users', () => {
    const todoList = shallow(<Statistics toDoList={[]} />);
    expect(todoList.text()).toContain('0 task(s)0 completed0 opened')
});