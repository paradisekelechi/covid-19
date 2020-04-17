import styled, { keyframes } from 'styled-components';
import { ModeType } from './Typography';
import Colors from './Colors';

type ToggleType = {
    checked: boolean;
}

export const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 66px;
    height: 40px;
`;

export const SwitchInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

export const SwitchSlider = styled.span<ToggleType>`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.checked ? Colors.skyBlue : Colors.darkBlue};
    border: 2px solid ${props => props.checked ? Colors.darkBlue : Colors.skyBlue};
    -webkit-transition: .4s;
    transition: .4s;

    &:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: ${props => props.checked ? Colors.darkBlue : Colors.skyBlue};
        -webkit-transform: translateX(${props => props.checked ? '26px' : '0'});
        -ms-transform: translateX(${props => props.checked ? '26px' : '0'});
        transform: translateX(${props => props.checked ? '26px' : '0'});
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:focus + &{
        box-shadow: 0 0 1px ${Colors.darkBlue};
    }
`;

export const Flag = styled.img`
`;

const spinLoader = () => keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div<{ mode: ModeType; }>`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 8px solid ${props => props.mode && props.mode === 'dark' ? Colors.skyBlue : Colors.darkBlue};
    border-top: 8px solid ${Colors.fairBlue};
    animation: ${spinLoader} 1600ms linear infinite;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;