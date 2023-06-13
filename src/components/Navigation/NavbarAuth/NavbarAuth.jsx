import css from './navbar-auth.module.scss';
import { NavLink } from 'react-router-dom';

const NavbarAuth = () => {
  return (
    <div className={css['wrapper']}>
      <NavLink to="/register">
        Register
      </NavLink>
      <NavLink to="/login">
        Login{' '}
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
