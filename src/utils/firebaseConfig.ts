import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBX8aFwuE8Xq8-UoYcAxhYEBKhKmHFETsg',
  authDomain: 'pokedex-react-25688.firebaseapp.com',
  projectId: 'pokedex-react-25688',
  storageBucket: 'pokedex-react-25688.appspot.com',
  messagingSenderId: '85303995645',
  appId: '1:85303995645:web:8cfa46f0f6ac7fadcba294',
  measurementId: 'G-NCP4H4CX5T',
};

//Initialization firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

//create collections
export const usersRef = collection(firebaseDB, 'users');
export const pokemonListRef = collection(firebaseDB, 'pokemonList');
