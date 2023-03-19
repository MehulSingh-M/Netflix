import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';


const config = {
    
    apiKey: "AIzaSyA9_0PtiS8dRNeCIh83KelLqPwsBoWkv1Q",
    authDomain: "netflix-99b06.firebaseapp.com",
    projectId: "netflix-99b06",
    storageBucket: "netflix-99b06.appspot.com",
    messagingSenderId: "489557365490",
    appId: "1:489557365490:web:3d763488cd65990a12b66b",
    measurementId: "G-RWTJ5HN6LQ"

};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };