import styled from 'styled-components'


export const container = styled.div`
    background-color: #dbdbdb;
`;

export const header = styled.header`
    height: 70px;
    display: flex;
    border-bottom: 1px solid black;
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
    display: flex;
    min-height: 400px;
    div{
        flex: 1;
        padding-top: 20px;
        display: flex;
        justify-content: center;
    }
    .todoTasks{
        border-right: 1px solid black;
    }
    .doingTasks{
        border-right: 1px solid black;
    }
`;