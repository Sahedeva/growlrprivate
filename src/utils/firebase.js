import firebase from 'firebase';
import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();


const config = {
    apiKey: env.REACT_APP_FBAPIKEY1,
    authDomain: env.REACT_APP_FBAUTHDOMAIN1,
    databaseURL: env.REACT_APP_FBDATABASEURL1,
    storageBucket: env.REACT_APP_FBSTORAGEBUCKET1,
    messagingSenderId: env.REACT_APP_FBMESSAGINGSENDERID1
  };

firebase.initializeApp(config);

export default firebase;
