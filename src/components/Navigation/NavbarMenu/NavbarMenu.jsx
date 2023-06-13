import css from './NavbarMenu.module.scss';
import { NavLink } from 'react-router-dom';

const NavBarMenu = () => {
  return (
    <div className={css['wrapper']}>
      <NavLink to="/contacts">
        My contacts
      </NavLink>
    </div>
  );
};

export default NavBarMenu;
