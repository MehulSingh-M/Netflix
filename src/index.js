import React from 'react';
import { render} from 'react-dom';
import App from './app';
import 'normalize.css';
import { GlobalStyles} from './global-styles';
import { firebase } from './firebase/firebase';
import { FirebaseContext } from './context/firebasecontext';

render(<>

    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles/>
  
      <App />
    </FirebaseContext.Provider>  
  </>,
 
  document.getElementById('root'));



