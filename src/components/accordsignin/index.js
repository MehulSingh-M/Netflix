import React from 'react';
import { Container, ButtonLink, Text} from './styles/accordsignin';

export default function accordsignin({ children, ...restProps }) {
    return (
        <Container {...restProps} >{children}</Container>
    );
};

accordsignin.ButtonLink = function accordsigninButtonLink({ children, ...restProps}) {
    return(
        <ButtonLink {...restProps}>
            {children} 
        </ButtonLink>
    );
};


accordsignin.Text = function accordsigninText({ children, ...restProps}) {
    return (
        <Text {...restProps}>
         {children}
 
        </Text>

    );     
};  
