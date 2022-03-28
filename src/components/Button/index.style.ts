import styled from "styled-components";

const Styled = {
    Button: styled.button`
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(var(--color-primary));
        border: none;
        border-radius: 6px;
        color: rgb(255, 255, 255);
        padding-left: 2.4rem;
        padding-right: 2.4rem;
        cursor: pointer;
        &:hover {
            opacity: 0.9;
        }
    `
}


export default Styled;