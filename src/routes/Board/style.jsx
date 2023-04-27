import styled from "styled-components";

export const container = styled.div`

    background-color: #e4e4e4;
    min-height: 400px;

`;

export const nav = styled.nav`
    display: flex;
    height: 50px;
    border-bottom: 1px solid black;

    .headerdivs{
        flex:1;
        text-align: center;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .todoNav{
        background-color: #dcffdc;
    }
    .doingNav{
      background-color: #fdbfbf;
    }
    .doneNav{
     background-color: #c6c6ff;
    }
`;

export const body = styled.div`
    min-height: 400px;
    display: flex;

    .boxdiv{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
    }
    .todoTasks{
        flex:1;
        border-right: 1px solid black;
    }
    .doingTasks{
        flex:1;
        border-right: 1px solid black;
    }
    .doneTasks{
        flex:1
    }
`;
