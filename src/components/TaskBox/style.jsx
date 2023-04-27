import styled from 'styled-components'

export const container = styled.div`
    background-color: white;
    width: 80%;
    margin: 20px
`;

export const colorBar = styled.div`
    height: 20px;
    border-bottom: 1px solid lightgray;
`;
export const body = styled.div`
    height: 90px ;
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