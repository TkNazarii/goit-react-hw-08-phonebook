import { Link } from 'react-router-dom';
import { FaBookOpen } from 'react-icons/fa';

import css from './Navigation.module.scss';

import NavBarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import useAuth from 'shared/hooks/useAuth';

const Navigation = () => {
  const isLogin = useAuth();
  return (
    <nav className={css['wrapper']}>
      <Link className={css['logo']} to="/">
        <FaBookOpen className={css['icon']}/> Phonebook
      </Link>
      {isLogin && <NavBarMenu />}
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </nav>
  );
};

export default Navigation;
