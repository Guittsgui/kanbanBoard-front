import styled from 'styled-components'

export const header = styled.header`
    height: 120px;
    border: 2px solid #5e105e;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #5e105e;
    h1{
        font-size: 40px;
        letter-spacing: 2px;
        border-bottom: .5px solid #5e105e;
        padding-bottom: 5px;
        text-shadow: 1px 1px 1px #42424275;
    }
`;
export const nav = styled.nav`
    height: 80px;
    border: 2px solid #5e105e;
    border-top: none;
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        color: #5e105e;
        border: 2px solid #5e105e;
        height: 40px;
        width: 200px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 2px 2px 2px #00000050;
        &:hover{
            color: #8d538d;
            border-color: #8d538d ;
            background-color: #f8eaf8;
        }
    }
`;

