import styled, { keyframes } from 'styled-components';

const Sprin = keyframes`
    to {
        transform: rotate(360deg);
    }
`

const Styled = {
    Loading: styled.div`
        display: inline-block;
        border: 3px solid #CCCCCC;
        border-top-color: red;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        animation: ${Sprin} 1s linear infinite;
    `
}

export default Styled;