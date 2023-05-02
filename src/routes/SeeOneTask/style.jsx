import styled from "styled-components";

export const container = styled.div`
    margin: 20px auto;
    width: 600px;
    box-shadow: 2px 2px 2px #00000075;
    border-radius: 15px;
    
`;
export const colorbar = styled.div`
    height: 30px;
    width: 100%;
    background-color: blue;
    border-radius: 15px 15px 0 0;
`;
export const infoContainer = styled.div`
    min-height: 300px;
    background-color: #f3f3f3;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        margin-bottom: 20px;
    }
    h2{
        margin-bottom: 5px;
    }
`;

export const nav = styled.div`
    height: 50px;
    border-top: 1px solid black;
    background-color: #f3f3f3;
    border-radius: 0 0 15px 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 18px;
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        cursor: pointer;
        color: #530353;
        &:hover{
            color: #bd0bbd;
        }
        
    }
    button{
        border: none;
        color: #b40303;
        cursor: pointer;
        font-size: 18px;
        display: flex;
        align-items: center;
        gap: 5px;
        &:hover{
            color: red;
        }
    }
`;