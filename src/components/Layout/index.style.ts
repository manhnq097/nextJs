import styled from 'styled-components'
import mediaQuery from 'ultils/mediaQuery';

const Styled = {
    Layout: styled.div`
        display: flex;
    `,
    SidebarRegion: styled.div<{active: boolean}>`
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 28rem;
        min-width: 28rem;
        flex-basis: 28rem;
        padding: 2.4rem;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.170509);
        background-color: rgb(255, 255, 255);
        transition: 200ms all ease-in-out;
        @media (max-width: ${mediaQuery.tablet}) {
            transform: ${({active}) => active ? 'translateX(0)': 'translateX(-100%)'};
        }
    `,
    SidebarToggle: styled.button`
        position: fixed;
        top: 2.4rem;
        right: 2.4rem;
        z-index: 10;
        width: 4.4rem;
        height: 4.4rem;
        border: none;
        justify-content: center;
        align-items: center;
        background-color: rgb(var(--color-primary));
        border-radius: 50%;
        cursor: pointer;
        transition: 200ms opacity ease-in-out;
        display: none;
        &:hover {
            opacity: 0.9;
        }
        @media (max-width: ${mediaQuery.tablet}) {
            display: flex;
        }
    `,
    MainRegion: styled.div`
        flex-grow: 1;
        margin-left: 28rem;
        overflow-y: auto;
        min-height: 100vh;
        @media (max-width: ${mediaQuery.tablet}) {
            margin-left: unset;
        }
    `,
    Main: styled.div<{fullWidth?: boolean}>`
        padding: 2.4rem;
        margin: 0 auto;
        max-width: ${({fullWidth}) => fullWidth ? '100%' : '1170px'};
    `,
    Menu: styled.div`
        background-color: #000000;
    `,
    MenuList: styled.ul`
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
    `,
    MenuItem: styled.li`
        display: block;
        color: red;
        flex-grow: 1;
    `,
    MenuItemLink: styled.a`
        display: block;
        text-align: center;
        padding: 12px 24px;
        color: #FFFFFF;
    `
}


export default Styled;