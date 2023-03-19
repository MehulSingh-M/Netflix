import React from 'react';
import { Accordion } from '../components';
import Accordsignin from '../components/accordsignin';
import faqsData from '../fixtures/faqs.json';
import * as ROUTES from '../constants/routes'

export function FaqsContainer() {
    return(
        <Accordion>
            <Accordion.Title>Frequently Asked Questions </Accordion.Title>
            {faqsData.map (item =>
              <Accordion.Item key={item.id}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.Item>  
            )}
            <Accordion.Item />
              <Accordsignin>
                  <Accordsignin.ButtonLink to={ROUTES.SIGNUP}>Try it Now</Accordsignin.ButtonLink>
                  <Accordsignin.Text>
                  Ready to watch? 
                  Before that u need to Register an account please click on the Signup button now to Signup
                  </Accordsignin.Text>
              </Accordsignin>

             

        </Accordion>

        
    );
}