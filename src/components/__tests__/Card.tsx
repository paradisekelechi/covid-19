import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Colors from '../../common/Colors';
import {ModeType} from '../../common/Typography';
import Card from '../Card';
import {getFormattedNumber} from '../EntryRow';

describe('Card', () => {
    const props = {
        color: Colors.darkBlue,
        mode: 'dark' as ModeType,
        title: getFormattedNumber(5672883),
        text: 'cases'
    };

    it('matches snapshot', () => {
        const wrapper = shallow(<Card {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});