import styled from 'styled-components'


export const container = styled.div`
    background-color: #dbdbdb;
    min-height: 400px;
`;

export const header = styled.header`
    height: 70px;
    display: flex;
    div{
        flex: 1;
        text-align: center;
        font-size: 16px;
        height: 100%;
        align-items: center;
        justify-content: center;
        display: flex;
    }
    .todo{
        background-color: #ddffdd;
    }
    .doing{
        background-color: #d0d0ff;
    }
    .done{
        background-color: #fcadad;
    }
`;

export const board = styled.div`
    
`;