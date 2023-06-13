import { NavLink } from 'react-router-dom';
// import Phone from '../HomePage/Images/phone.gif';
import css from './HomePage.module.scss';
import 'animate.css';
const HomePage = () => {
  return (
    <main>
      <section className={css['container']}>
        <div className="">
          <h1 data-text="My contacts">Add contacts</h1>
        </div>

        <div className={css['thumb']}>
          <div>
            {/* <img className={css['image']} src={Phone} alt="" /> */}
          </div>
        </div>
        <NavLink to="/contacts" className={css['button']} title="Try it now!">
          Try it now!
        </NavLink>
      </section>
    </main>
  );
};

export default HomePage;
