import styled from "styled-components";

export const container = styled.div`
    height: 500px;
    background-color: #e7e7e7;
    width: 600px;
    border-radius: 20px;
    margin: 20px auto;
    box-shadow: 2px 2px 2px #00000075;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    input{
        height: 25px;
        width: 400px;
        text-align: center;
        border-radius: 20px;
        border: 1px solid black;
        margin: 20px;
        outline: none;
    }
    textarea{
        width: 400px;
        height: 300px;
        outline: none;
        padding: 15px;
    }
    button{
        height: 25px;
        margin-top: 25px;
        width: 200px;
        letter-spacing: 2px;
        word-spacing: 5px;
        border-radius: 10px;
        border: 1px solid #5e105e;
        color: #5e105e;
        cursor: pointer;
        &:hover{
            color: #c500c5;
            border-color: #c500c5;
        }
    }
`;

export const back = styled.div`
    text-align: center;
    margin-top: 40px;
    cursor: pointer;
    a{
        color: red;
        &:hover{
            color: #ff9e9e;
        }
    }
`;