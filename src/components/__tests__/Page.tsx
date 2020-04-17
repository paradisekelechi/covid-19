import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Page from '../Page';

describe('Page', () => {
    it('matches snapshot', () => {
        const wrapper = shallow(<Page />)
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('renders properly', () => {
        const wrapper = mount(<Page />);

        console.log(wrapper.debug());

        console.log(wrapper.find('StyledComponent').length);


        expect(wrapper.find('StyledComponent')).toHaveLength(2);
    })
});