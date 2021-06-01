import	firebase	from	'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyASu_yxmoEBm9nFtBinzZuTF8Dws_Ajwsg",
    authDomain: "trabalholista.firebaseapp.com",
    projectId: "trabalholista",
    storageBucket: "trabalholista.appspot.com",
    messagingSenderId: "1074791918999",
    appId: "1:1074791918999:web:4328ddaa94ddd69516a8d2"
  };

  let app = firebase.initializeApp(firebaseConfig);
  export const db  = firebase.firestore()//app.database();