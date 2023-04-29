import styled from 'styled-components'

export const container = styled.div`
    background-color: white;
    width: 80%;
    margin: 20px;
    box-shadow: 2px 2px 2px #00000075;
`;

export const colorBar = styled.div`
    height: 20px;
    border-bottom: 1px solid lightgray;
    background-color: #b0f7b0;
`;
export const body = styled.div`
    height: 90px ;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    text-align: center;
`;

export const buttonsBar = styled.div`
    height: 40px;
    border-top: 1px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    button{
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`;