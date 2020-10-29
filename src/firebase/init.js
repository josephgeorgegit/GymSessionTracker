import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCdFLpF3_5R04cxVW7RvH0MlFxh2Gep7uk",
    authDomain: "workouttracker-dcbee.firebaseapp.com",
    databaseURL: "https://workouttracker-dcbee.firebaseio.com",
    projectId: "workouttracker-dcbee",
    storageBucket: "workouttracker-dcbee.appspot.com",
    messagingSenderId: "206859206930",
    appId: "1:206859206930:web:e0ef6f8697939e9f1533cb",
    measurementId: "G-SJ0E926WDR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();