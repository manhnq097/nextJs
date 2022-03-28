import styled from 'styled-components';


const Styled = {
    Sidebar: styled.div`
    `,
    SidebarList: styled.ul``,
    SidebarItem: styled.li`
        &:not(:first-child) {
            margin-top: 0.6rem;
        }
    `,
    SidebarItemLink: styled.a<{active: string}>`
        height: 3.6rem;
        display: flex;
        align-items: center;
        padding: 1.2rem;
        border-radius: 4px;
        transition: 200ms all ease-in-out;
        font-size: 1.5rem;
        ${({active}) => active && `
            box-shadow: -1px 1px 8px rgba(126, 114, 242, 0.578726);
            background: linear-gradient(224.53deg, #9E94FF 0%, #7E72F2 99.2%);
            color: rgb(255, 255, 255);
        `}
        &:hover {
            background: linear-gradient(224.53deg, #9E94FF 0%, #7E72F2 99.2%);
            color: rgb(255, 255, 255);
        }
    `
}

export default Styled;