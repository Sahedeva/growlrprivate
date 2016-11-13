import firebase from 'firebase';
import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();


const config = {
    apiKey: env.REACT_APP_FBAPIKEY1,
    authDomain: "growl-46ecf.firebaseapp.com",
    databaseURL: "https://growl-46ecf.firebaseio.com",
    storageBucket: "growl-46ecf.appspot.com",
    messagingSenderId: "296409813010"
  };

firebase.initializeApp(config);

export default firebase;
