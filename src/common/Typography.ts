import styled from 'styled-components';
import Colors from '../common/Colors';

export type ModeType = 'dark' | 'light';

type TitleType = {
  mainHeader: boolean;
  mode: ModeType;
}

export const Title = styled.h3<TitleType>`
  letter-spacing: 0px;
  font-family: ${props => props.mainHeader ? 'Berkshire Swash' : 'Kodchasan'};
  font-size: 38px;
  line-height: 47px;
  color: ${props => props.mode === 'dark' ? Colors.skyBlue : Colors.darkBlue};
  margin: 0px;
`;

type ContentTextType = {
  basic?: boolean;
  bold?: boolean;
  mode: ModeType;
}

export const ContentText = styled.p<ContentTextType>`
  font-family:  'Kodchasan';
  font-size: ${props => props.basic ? '1.1em' : '1.4em'};
  font-weight: ${props => props.bold ? '600' : 'normal'};
  color: ${props => props.mode === 'dark' ? Colors.skyBlue : Colors.darkBlue};
`;

const StatText = styled.h2`
  letter-spacing: 0px;
  font-family: 'Berkshire Swash';
  color: ${Colors.skyBlue};
  margin: 0px;
  width: 100%;
  text-align: center;
`;

export const StatTitleText = styled(StatText)`
  font-size: 3.2em;
`;

export const StatContentText = styled(StatText)`
  font-size: 1.25em;
`;

const ContentUnitText = styled.p<{ color?: string, leftAligned?: boolean }>`
  letter-spacing: 0px;
  font-family: 'Kodchasan';
  color: ${props => props.color};
  margin: 0px;
  width: 100%;
  text-align: ${props => props.leftAligned ? 'left' : 'center'};
`;

export const ContentUnitTitleText = styled(ContentUnitText)`
  font-size: 1.2em;
  font-weight: 600;
`;

export const ContentUnitContentText = styled(ContentUnitText)`
  font-size: 1em;
`;
