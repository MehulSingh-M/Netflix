import React from 'react';
import { Feature } from '../components';
import { FaqsContainer } from '../containers/faq';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import * as ROUTES from '../constants/routes'
import { JumbotronContainer } from '../containers/jumbotron';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited series, TV programms and more.</Feature.Title>
                    <Feature.ButtonLinktwo to={ROUTES.SIGNUP}>Sign up</Feature.ButtonLinktwo>
                    <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
                    
                </Feature>
 
            </HeaderContainer>
                <JumbotronContainer />
                <FaqsContainer />
                <FooterContainer />
            
           
        </>    
    )
}