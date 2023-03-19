import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebasecontext';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes'

export default function SignUp() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignup = (event) => {
        event.preventDefault();

       firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => 
            result.user.updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 5) + 1,
            })
            .then(() => {
                history.push(ROUTES.BROWSE);
            }) 
       )
       .catch((error) => {
           setFirstName('');
           setEmailAddress('');
           setPassword('');
           setError(error.message);
       });
    }

    return(
        <>
            <HeaderContainer> 
                <Form>
                    <Form.Title>Signup</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeholder="Username"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)} 
                        />

                        <Form.Input
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)} 
                        />

                        <Form.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)} 
                        />

                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign Up
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Already a user? Follow the Sign In button at the Top Right.
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Development team reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            
            </HeaderContainer>
            <FooterContainer/>
        </>    
    )
}