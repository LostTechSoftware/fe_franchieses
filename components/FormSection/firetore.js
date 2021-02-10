import firebase from 'firebase';
import 'firebase/firestore';

export default function fireStore(
  event,
  name,
  phoneNumber,
  uf,
  city,
  firebaseInitialized,
  setFirebaseInitialized
) {
  event.preventDefault();

  if(
    !name ||
    !phoneNumber ||
    !uf ||
    !city
  ) return 'empty';

  if(!firebaseInitialized)
    try {
      console.log('INSIDE THI FUCKING TRY')
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
      setFirebaseInitialized(true);
    } catch (error) {
      console.log('INSIDE THI FUCKING CATCH')
      throw error;
    }
  
  const db = firebase.firestore();
  if(!firebaseInitialized)
    db.settings({ timestampsInSnapshots: true });

  async function registerLead() {
    try {
      await db.collection('people').add({
        Nome: name,
        Telefone: phoneNumber,
        Estado: uf,
        Cidade: city
      })
      window.location.replace("http://foodzilla.com.br/")
    } catch (error) {
      console.log('error');
      return error;
    }
  }
  registerLead()
}
