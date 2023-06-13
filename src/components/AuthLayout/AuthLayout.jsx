// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current } from 'redux/auth/auth-operations';

// запит про користувача
const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return <>{children}</>;
};

export default AuthLayout;
