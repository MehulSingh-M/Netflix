import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
    
    
    border-bottom: 8px solid #222;
    text-align: center;
    padding; 165px 45px; 

`;

export const Title = styled.h1`
    color: white;
    max-width: 640px;
    font-size: 50px;
    font-weight: 500;
    margin: auto;
    padding-bottom: 10px;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const Subtitle = styled.h3`
    color: white;
    font-size: 26px;
    font-weight: normal;
    margin: 16px auto;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const ButtonLinktwo = styled(ReactRouterLink)`
    
    background-color: #e50914;
    
    padding: 7px 20px;
    color: white;
    border: 0;
    font-size: 20px;
    border-radius: 7px;
    cursor: pointer;
    text-decoration: none;
    
    text-align: center;

    &:hover {
        background-color: white;
        color: red;
    }
`;
