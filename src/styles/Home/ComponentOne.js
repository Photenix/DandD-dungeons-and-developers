import styled from "styled-components";

export const Div2 = styled.div `
    display:flex;
    padding: 25px;
    gap:5vh;
    justify-content: space-around;
    @media ( max-width: 850px ) {
        flex-direction: column;
        .card-main{
            width: auto;
        }
    }
`;

export const Div1 = styled.div `
    display:flex;
    width: 100%;
    justify-content:center;
    margin-top:3%;
`;

export const H1 = styled.h1 `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 8px;
    color:var(--colorText);

    width:10%;
    height: 120px;
    left: 502.8px;
    top: -0.31px;

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
    margin-top:25%;
    margin-left:-47%;
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
    margin-top:19%;
    margin-left:45%;
`;

export const DivE = styled.div `
    position:absolute;
    width: 30px;
    height: 30px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    
    background: #D55252;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    margin-top:-6%;
    margin-left:-45%;
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
    margin-top: -5%;
    margin-left:30%


`;

