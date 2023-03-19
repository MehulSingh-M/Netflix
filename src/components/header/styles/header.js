import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;
`;

export const Frame = styled.div``;

export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
    margin: 0, 56px;
    height: 70px;
    padding: 18px 25px;
    justify-content: space-between;
    align-items: center;
`;

export const Picture = styled.button`
    background: url(${({ src}) => src});
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
`;

export const Link = styled.p`
    color: white;
    text-decoration: none;
    padding-left: 10px;
    margin-right: 30px;
    font-weight: ${({ active}) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

export const Dropdown = styled.div`
    display: none;
    background-color: black;
    position: absolute;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 10px;
    border-radius: 9px;

    ${Group}:last-of-type ${Link} {
        cursor: pointer;
    }

    ${Link},${Picture} {
        cursor: default;
    }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;

    svg{
        color: white;
        cursor: pointer;
    }

`;

export const SearchIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;

    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }
`;

export const Player = styled.div`
    margin-left: 50px;
`;


export const Button = styled.button`
    bob-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color: #000;
    
    border-width: 0;
    padding: 10px 30px;
    border-radius: 5px;
    max-width: 130px;
    font-size: 20px;
    margin-left: 50px;
    margin-top; 10px;
    cursor: pointer;
    

    &:hover {
        background-color: red;
        color: white;
    }
`;

export const SearchInput = styled.input`
    background-color: #44444459;
    color: white;
    border-radius: 9px;
    border: 1px solid white;
    transition: width 0.5s;
    height: 20px;
    font-size: 14px;
    margin-left: ${({ active}) => (active == true ? '10px' : '0')};
    padding: ${({ active}) => (active == true ? '10px' : '0')};
    opacity: ${({ active}) => (active == true ? '1' : '0')};
    width: ${({ active}) => (active == true ? '200px' : '0px')};

`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;

    button {
        cursor: pointer; 
    }

    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
`;

export const Logo = styled.img`
    height: 32px;
    width: 100px;
    margin-right: 40px;

    @media (max-width: 1000px) {
        height: 45px;
        width: 167px;
    }

`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    width: 100px;
    height: 30px;
    padding-top: 7px;
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

export const Feature = styled.p`
    padding: 150px 0 100px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%; 
    

    
`;

export const Text = styled.p`
    color: white;
    font-size: 22px;
    line=height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0.45);
    margin-left: 50px;
`;



export const FeatureCallOut = styled.h2`
    color: white;
    font-size: 50px;
    line=height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0.45);
    margin-left: 50px;
    margin-bottom: 20px;
`;



