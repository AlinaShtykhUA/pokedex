import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer, ToastOptions, toast } from 'react-toastify';

import { Background } from './components';
import { Footer, Navbar } from './sections';
import { About, Compare, MyList, Pokemon, Search } from './pages';

import 'react-toastify/dist/ReactToastify.css';
import './scss/index.scss';
import { clearToasts, setUserStatus } from './app/slices/appSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from './utils/firebaseConfig';

const App = () => {
  const { toasts } = useAppSelector(({ app }) => app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, currentUser => {
      if (currentUser) {
        dispatch(setUserStatus({ email: currentUser.email }));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    if (toasts.length) {
      const toastOptions: ToastOptions = {
        position: 'bottom-right',
        autoClose: 2000,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      };
      toasts.forEach((message: string) => {
        toast(message, toastOptions);
      });
      dispatch(clearToasts());
    }
  }, [toasts, dispatch]);
  return (
    <div className="main-container">
      <Background />

      <BrowserRouter>
        <div className="app">
          <Navbar />

          <Routes>
            <Route element={<Search />} path="/search" />
            <Route element={<MyList />} path="/list" />
            <Route element={<About />} path="/about" />
            <Route element={<Compare />} path="/compare" />
            <Route element={<Pokemon />} path="/pokemon/:id" />

            <Route element={<Navigate to="/pokemon/1" />} path="*" />
          </Routes>

          <Footer />
          <ToastContainer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
