import firebase from 'firebase';
import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();


const config = {
    apiKey: process.env.FBAPIKEY1,
    authDomain: process.env.FBAUTHDOMAIN1,
    databaseURL: process.env.FBDATABASEURL1,
    storageBucket: process.env.FBSTORAGEBUCKET1,
    messagingSenderId: process.env.FBMESSAGINGSENDERID1
  };

firebase.initializeApp(config);

export default firebase;
