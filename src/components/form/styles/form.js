import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 600px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    box-sizing: border-box;
    width: 600px;
    margin: auto;
    max-width: 500px;
    padding: 60px ;
    margin-bottom: 100px;
`;

export const Error = styled.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 15px 20px;
`;

export const Base = styled.form`
    
`;

export const Title = styled.h1`
    color: white;
`;

export const Text = styled.p`
    color: red;
    padding: 0 65px;

`;

export const TextSmall = styled.p`
    color: white;
    padding: 0 20px;

`;

export const Link = styled(ReactRouterLink)`
    color: white;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const Input = styled.input`
        display:flex;
        background: #333;
        border-radius: 4px;
        border: 0;
        color: white;
        height: 50px;
        line-height: 50px;
        width: 250px;
        padding: 5px 50px;
        margin-bottom: 20px;
`;

export const Submit = styled.button`
    background: #e50914;
    border-radius: 7px;

    font-size: 19px;
    fone-weight: bold;
    margin: 24px 80px 12px;
    padding: 16px 50px;
    
    border: 0;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: red;
    }

    &:disabled {
        opacity: 0.5;
    }
`;