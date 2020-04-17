import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Colors from '../../common/Colors';
import {ModeType} from '../../common/Typography';
import EntryRow from '../EntryRow';
import {getFormattedNumber} from '../EntryRow';

describe('EntryRow', () => {
    const data = {
        "country": "Turkey",
        "countryInfo": {
            "_id": 792,
            "iso2": "TR",
            "iso3": "TUR",
            "lat": 39,
            "long": 35,
            "flag": "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/tr.png"
        },
        "cases": 23934,
        "todayCases": 3013,
        "deaths": 501,
        "todayDeaths": 76,
        "recovered": 786,
        "active": 22647,
        "critical": 1311,
        "casesPerOneMillion": 284,
        "deathsPerOneMillion": 6,
        "updated": 1586034307936
    };

    const props = {
        mode: 'dark' as ModeType,
        data
    };

    it('matches snapshot', () => {
        const wrapper = shallow(<EntryRow {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});