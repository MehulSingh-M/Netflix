import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 20px;
    flex-wrap: wrap;
    align-items: center;
    
    

    @media (max-width: 1000px) {
        
        align-items: center;
        
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: flex;
    align-items: center;
    height: 50px;
    background: #e50914;
    color: white;
    text-transform: uppercase;
    padding: 0 22px;
    font-size: 22px;
    border-radius: 10px;
    border: 0;
    cursor: pointer; 
    text-decoration: none;

    &:hover {
        background: white;
        color: red;
    }
    
    



`;

export const Text = styled.p`
    color: white;
    

    
    
`;
