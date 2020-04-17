import * as React from 'react';
import { ModeType, ContentUnitContentText, ContentUnitTitleText } from '../common/Typography';
import { ContentRow, ContentRowUnit } from '../common/Layout';
import { Flag } from '../common/Modules';
import Colors from '../common/Colors';

type EntryDataType = {
    country: string;
    countryInfo: {
        _id: number;
        iso2: string;
        iso3: string;
        lat: number;
        long: number;
        flag: string;
    },
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    updated: number;
}

export interface EntryRowProps {
    mode: ModeType;
    data: EntryDataType;
}

type getFormattedNumberType = (number: number) => string;

export const getFormattedNumber: getFormattedNumberType = (number) => {
    return new Intl.NumberFormat('en').format(number);
}

const EntryRow: React.SFC<EntryRowProps> = ({ mode, data }) => {
    const { country, countryInfo: { flag }, cases, todayCases, deaths, todayDeaths, active, recovered } = data;
    return (
        <ContentRow spacing='none' alignment='space-evenly' mode={mode as ModeType}>

            <ContentRowUnit >
                <Flag src={flag} width="100" height="44" />
                <ContentUnitTitleText color={Colors.tourquoisBlue} leftAligned={true}>{country}</ContentUnitTitleText>
            </ContentRowUnit>

            <ContentRowUnit >
                <ContentUnitTitleText color={Colors.tourquoisBlue}>{getFormattedNumber(Number(cases))}</ContentUnitTitleText>
                <ContentUnitContentText color={Colors.tourquoisBlue}>Total Cases</ContentUnitContentText>
            </ContentRowUnit>

            <ContentRowUnit >
                <ContentUnitTitleText color={Colors.fairBlue}>{getFormattedNumber(todayCases)}</ContentUnitTitleText>
                <ContentUnitContentText color={Colors.fairBlue}>Cases Today</ContentUnitContentText>
            </ContentRowUnit>

            <ContentRowUnit >
                <ContentUnitTitleText color={Colors.paleRed}>{getFormattedNumber(deaths)}</ContentUnitTitleText>
                <ContentUnitContentText color={Colors.paleRed}>Total Deaths</ContentUnitContentText>
            </ContentRowUnit>

            <ContentRowUnit >
                <ContentUnitTitleText color={Colors.errorRed}>{getFormattedNumber(todayDeaths)}</ContentUnitTitleText>
                <ContentUnitContentText color={Colors.errorRed}>Deaths Today</ContentUnitContentText>
            </ContentRowUnit>

            <ContentRowUnit >
                <ContentUnitTitleText color={Colors.green}>{getFormattedNumber(recovered)}</ContentUnitTitleText>
                <ContentUnitContentText color={Colors.green}>Recovered</ContentUnitContentText>
            </ContentRowUnit>

            <ContentRowUnit>
                <ContentUnitTitleText color={Colors.yellowishGreen}>{getFormattedNumber(active)}</ContentUnitTitleText>
                <ContentUnitContentText color={Colors.yellowishGreen}>Active Cases</ContentUnitContentText>
            </ContentRowUnit>

        </ContentRow>
    );
}

export default EntryRow;