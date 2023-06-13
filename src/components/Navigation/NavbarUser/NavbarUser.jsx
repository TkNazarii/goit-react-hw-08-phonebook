import css from './NavbarUser.module.scss';
import { FiLogOut } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

const NavbarUser = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css['navbaruser']}>
      <span className={css['nameuser']}>{email}</span>
      <button onClick={onLogout} type="button">
        Log out <FiLogOut />
      </button>
    </div>
  );
};

export default NavbarUser;
