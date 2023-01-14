import styled from "styled-components";

export const Div = styled.div `
width:100%;
height:16%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
gap: 8px;
color: var(--colorText)



`;
export const H3 = styled.h3 `
color:white ;

margin-top:10%;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 46px;
line-height: 130%;
/* identical to box height, or 60px */

letter-spacing: -0.02em;

color: var(--colorText)

`;
export const Input = styled.input `
    width: calc( 100% - 24px );
    height:16%;
    border-radius:20px;
    padding: 0 12px;
`;

export const ContainerTGCard = styled.div `
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: none;
    gap: 50px;
    padding: 6% 80px;
`;

export const Div1 = styled.div `
    display: flex;
    justify-content: left;
    align-items: none;
    &:nth-child(odd){ flex-direction: row-reverse; }
`;
export const Div2 = styled.div `
    display: flex;
    justify-content: right;
    align-items: none;
`;
export const Img = styled.img `
    margin: auto auto;
    width:80%;
    height:80%;
`;
export const Div3 = styled.div `
display:flex;
margin: auto auto;
width:20%;
height:20%;
border-radius:50px
justify-content: center;
align-items: center;
`;