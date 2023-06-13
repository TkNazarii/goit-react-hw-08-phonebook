import css from './LoginForm.module.scss';
import PropTypes from 'prop-types';
import useForm from 'shared/hooks/useForm';

import { initialState } from './initialState';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form className={css['form']} action="" onSubmit={handleSubmit}>
      <div className={css['group']}>
        <label className={css['label']} htmlFor="">
          User email:
        </label>
        <input
          value={email}
          name="email"
          onChange={handleChange}
          className={css['input']}
          type="email"
          required
        />
      </div>
      <div className={css['group']}>
        <label className={css['label']} htmlFor="">
          User password:
        </label>
        <input
          value={password}
          name="password"
          onChange={handleChange}
          className={css.input}
          type="password"
          required
        />
      </div>
      <div className={css['group']}>
        <button className={css['button']} type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
