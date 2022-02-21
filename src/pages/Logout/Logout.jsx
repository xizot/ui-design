import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { authActions } from '../../redux/actions/auth.action';

function Logout() {
  const history = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem('auth');
    dispatch(authActions.logoutSuccess());
    history('/login');
  }, [history, dispatch]);

  return <></>;
}

export default Logout;
