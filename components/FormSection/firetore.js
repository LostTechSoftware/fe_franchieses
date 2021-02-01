import firebase from 'firebase';
import 'firebase/firestore';

export default function fireStore(event, name, email, uf, city) {
  event.preventDefault();

  if(!sessionStorage.getItem('fireAppInitialized'))
    try {
      const firebaseConfig = {
        apiKey: "AIzaSyBN4KJ3GkzziaUA9-e98VN2eFftw55DV74",
        authDomain: "food-16e3e.firebaseapp.com",
        projectId: "food-16e3e",
        storageBucket: "food-16e3e.appspot.com",
        messagingSenderId: "186121996508",
        appId: "1:186121996508:web:7360d2c58f380488968c19",
        measurementId: "G-9E2JG5589R"
      };
      firebase.initializeApp(firebaseConfig);
      sessionStorage.setItem('fireAppInitialized', true)
    } catch (error) {
      throw error;
    }
  
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true });

  async function registerLead() {
    try {
      await db.collection('people').add({
        Name: name,
        Email: email,
        Estado: uf,
        Cidade: city
      })
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  registerLead()
}
