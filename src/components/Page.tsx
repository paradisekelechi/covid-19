import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Title, ModeType, ContentText } from '../common/Typography';
import { Container, BlockWrapper, Wrapper } from '../common/Layout';
import { Switch, SwitchInput, SwitchSlider, Loader } from '../common/Modules';
import Colors from '../common/Colors';
import Card from './Card';
import EntryRow, { getFormattedNumber } from './EntryRow';

export interface PageProps {
}

const Page: React.FunctionComponent<PageProps> = () => {
    const [mode, setMode] = useState('light');
    const [checked, setChecked] = useState(false);
    const [cases, setCases] = useState(0);
    const [deaths, setDeaths] = useState(0);
    const [recovered, setRecovered] = useState(0);
    const [active, setActive] = useState(0);
    const [countriesData, setCountriesData] = useState([]);
    const [affectedCountries, setAffectedCountries] = useState(0);

    const handleToggleSwitch = () => {
        setChecked(!checked);
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }

    };

    useEffect(() => {
        axios.get('https://corona.lmao.ninja/v2/all')
            .then(res => {
                const { cases, deaths, recovered, active, affectedCountries } = res.data;
                setCases(cases);
                setDeaths(deaths);
                setRecovered(recovered);
                setActive(active);
                setAffectedCountries(affectedCountries);
            });

        axios.get('https://corona.lmao.ninja/v2/countries')
            .then(response => {
                setCountriesData(response.data);
            })
    }, []);

    return (
        <Container mode={mode as ModeType} >
            {countriesData && countriesData.length > 0 ? (
                <BlockWrapper spacing="none">
                    <Wrapper spacing='none' alignment='space-between'>
                        <Title mainHeader={true} mode={mode as ModeType} >Covid-19 Reports </Title>
                        <Switch>
                            <SwitchInput checked={checked} onClick={handleToggleSwitch} />
                            <SwitchSlider checked={checked} />
                        </Switch>
                    </Wrapper>

                    <BlockWrapper spacing='large'>
                        <ContentText mode={mode as ModeType}>Cumulative Reports for {affectedCountries} countries</ContentText>
                        <Wrapper spacing='medium' alignment='space-between'>
                            <Card color={Colors.darkBlue} mode={mode as ModeType} title={getFormattedNumber(cases)} text='Total Cases' />
                            <Card color={Colors.maroon} mode={mode as ModeType} title={getFormattedNumber(deaths)} text='Deaths' />
                            <Card color={Colors.darkGreen} mode={mode as ModeType} title={getFormattedNumber(recovered)} text='Recovered' />
                            <Card color={Colors.armyGreen} mode={mode as ModeType} title={getFormattedNumber(active)} text='Active Cases' />
                        </Wrapper>
                    </BlockWrapper>

                    <BlockWrapper spacing='large'>
                        <ContentText mode={mode as ModeType}>Reports by Countries</ContentText>
                        <BlockWrapper spacing='medium'>
                            {countriesData && countriesData.length > 0 && countriesData.map((entryData, i) => <EntryRow key={i} mode={mode as ModeType} data={entryData} />)}
                        </BlockWrapper>
                    </BlockWrapper>
                </BlockWrapper>
            ) : <Loader mode={mode as ModeType} />}
        </Container>
    );
};

export default Page;