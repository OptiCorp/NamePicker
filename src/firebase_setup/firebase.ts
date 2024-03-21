import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyB_r0_f7jCRJUjVj7c4Gr395VPAQgmOaPw',
    authDomain: 'namepicker-e09c0.firebaseapp.com',
    projectId: 'namepicker-e09c0',
    storageBucket: 'namepicker-e09c0.appspot.com',
    messagingSenderId: '534947564159',
    appId: '1:534947564159:web:d1dacae8cd321742d54d4a',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const nameRef = collection(db, 'names');

// getDocs(nameRef).then((snapshot) => {
//     const names: string[] = [];
//     snapshot.docs.forEach((doc) => {
//         names.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(names);

// });

export { auth, db };
