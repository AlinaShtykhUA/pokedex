import { signOut } from 'firebase/auth';
import React from 'react';
import { MdOutlinePowerSettingsNew } from 'react-icons/md';
import { useAppDispatch } from '../app/hooks';
import { setToast, setUserStatus } from '../app/slices/appSlice';
import { firebaseAuth } from '../utils/firebaseConfig';

const Footer = () => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    signOut(firebaseAuth);
    dispatch(setUserStatus(undefined));
    dispatch(setToast('Logged out successfully from firebase.'));
  };
  return (
    <footer className="footer">
      <div className="footer__block"></div>

      <div className="footer__menu"></div>

      <div className="footer__icon footer__block">
        <MdOutlinePowerSettingsNew onClick={handleLogOut} />
      </div>
    </footer>
  );
};

export default Footer;
