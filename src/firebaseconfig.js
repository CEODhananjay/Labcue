
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "",
  authDomain: "labcuesci.firebaseapp.com",
  projectId: "labcuesci",
  storageBucket: "labcuesci.appspot.com",
  messagingSenderId: "1078887639983",
  appId: "",
  measurementId: ""

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// async function addTestDocument() {
//   try {
//     const docRef = await addDoc(collection(db, 'testCollection'), {
//       name: 'Test',
//       timestamp: new Date(),
//     });
//     console.log('Document written with ID: ', docRef.id);
//   } catch (e) {
//     console.error('Error adding document: ', e);
//   }
// }
// addTestDocument();


export default db;
