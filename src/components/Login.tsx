import React from 'react';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseAuth, firebaseDB, usersRef } from '../utils/firebaseConfig';
import { FcGoogle } from 'react-icons/fc';
import { useAppDispatch } from '../app/hooks';
import { setUserStatus } from '../app/slices/appSlice';

const Login = () => {
  const dispatch = useAppDispatch();
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { email, uid },
    } = await signInWithPopup(firebaseAuth, provider);

    if (email) {
      const firestoreQuery = query(usersRef, where('uid', '==', uid));
      const fetchedUser = await getDocs(firestoreQuery);
      if (fetchedUser.docs.length === 0) {
        await addDoc(collection(firebaseDB, 'users'), {
          uid,
          email,
        });
      }
      dispatch(setUserStatus({ email }));
    }
  };
  return (
    <div className="login">
      <button onClick={handleLogin} className="login__btn">
        <FcGoogle />
        Login with Google
      </button>
    </div>
  );
};

export default Login;
