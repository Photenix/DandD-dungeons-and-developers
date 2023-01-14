import styled from "styled-components";

export const Div = styled.div `
    display:flex;
    margin: 30px 50px;
`;

export const Div1 = styled.div `
    display:flex;
    align-items:center;
    gap:10px;
    cursor: pointer;
`;

export const Div2 = styled.div `
    width:100%;
    display:flex;
    gap:20px;
    justify-content: center;
`;
export const H3 = styled.h3 `
    width: 62.31px;
    height: 16px;
    font-weight: bold;
    color: white;
    flex: none;
    order: 1;
    flex-grow: 0;
    
`;
export const Img = styled.img `
    width: 5vh;
    height: 5vh;
    flex: none;
    order: 0;
    flex-grow: 0;
    border-radius: 5px;
`;

export const Button2 = styled.button `
    background:none;
    border:none;
    font-size: 17px;
    color:var(--colorText);
`;

export const Button = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 128px;
    height: 36px;
    /* #001AFF */
    color:white;
    background: #001E6C;

    border-radius: 60px;
    border: none;

    &:nth-child(2){
        background: #5E7DD0;
    }
`;