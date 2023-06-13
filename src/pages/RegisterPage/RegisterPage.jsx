import css from './RegisterPage.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { signup } from 'redux/auth/auth-operations';
import { getAuthError } from 'redux/auth/auth-selectors';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(getAuthError);

  const onRegister = data => {
    dispatch(signup(data));
  };

  return (
    <div className={css['pagecontainer']}>
      <h2>Create your accaunt</h2>
      <RegisterForm onSubmit={onRegister} />
      {status && (
        <p style={{ color: 'red' }}> This user is already registered</p>
      )}
    </div>
  );
};
export default RegisterPage;
