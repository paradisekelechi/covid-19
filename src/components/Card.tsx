import React from 'react';
import { ModeType, StatContentText, StatTitleText, } from '../common/Typography';
import * as LayoutComponent from '../common/Layout';

export interface CardProps {
    color: string;
    mode: ModeType;
    title: string;
    text: string;
}

const Card: React.SFC<CardProps> = ({ color, mode, title, text }) => {
    return (
        <LayoutComponent.Card color={color} mode={mode}>
            <StatTitleText>{title}</StatTitleText>
            <StatContentText>{text}</StatContentText>
        </LayoutComponent.Card>
    );
}

export default Card;