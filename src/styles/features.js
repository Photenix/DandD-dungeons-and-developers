import styled from "styled-components";


export const Div = styled.div `
    /* width:100%; */
    height:50%;
    display:flex;
    justify-content: space-around;
    gap: 20px;
    padding: 20px 80px;

    &:nth-child(odd){
        flex-direction: row-reverse;
    }

    @media (max-width: 650px) {
        padding: 20px 40px;
        flex-direction: column-reverse;
        &:nth-child(odd){
            flex-direction: column-reverse;
        }
    }
`;

export const Div1 = styled.div `
    width: 50%;
    height:16%;
    text-align: left ;
    display:flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 650px) {
        width: auto;
    }
`;

export const Div2 = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const H3 = styled.h3 `
    /* margin-top:5%; */
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 130%;
    /* or 60px */
    text-align: left;

    /* T */

    color: white;
    
    @media (max-width: 650px) {
        font-size: 20px;
        line-height: 110%;
    }
`;

export const H2 = styled.h4 `
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    /* #E8630A */

    color: #E8630A;
`;

export const P = styled.p `
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    /* margin-top:3%; */

    color: white;
    @media (max-width: 650px) {
        font-size: 12px;
    }
`;

export const Button = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    width: 184px;
    height: 56px;

    /* blue_S */

    background: #001E6CC4;
    border-radius: 60px;
    border: none;
    color:white;
    font-size: 15px;

    transition: background 0.2s linear;

    :hover{
        background: #1B42A6;
    }
`;

export const Img = styled.img `
    width: 300px;
    height: 300px;
    border-radius:50%;
    object-fit: cover;
    @media (max-width: 650px) {
        width: 150px;
        height: 150px;
    }
`;

export const DivC = styled.div `
    position:absolute;
    width: 30px;
    height: 30px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background: #EC732F;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    margin-top:5%;
    margin-left:80%
`;

export const DivD = styled.div `
    position:absolute;
    width: 30px;
    height: 30px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background: #427CD5;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    margin-top:38%;
    margin-left:47%
`;

export const DivE = styled.div `
    position:absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    
    background: #D55252;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    margin-top:20%;
    margin-left:5%
`;

export const DivF = styled.div `
    position:absolute;
    width: 30px;
    height: 30px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background: #882FB1;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    margin-top: 10%;
    margin-left:30%
`;