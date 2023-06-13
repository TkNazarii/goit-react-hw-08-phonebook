import css from './Container.module.scss';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <div className={css['container']}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.array.isRequired,
};
export default Container;
