import PropTypes from 'prop-types';
import css from './RegisterForm.module.scss';
import useForm from 'shared/hooks/useForm';
import { initialState } from './initialState';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <form className={css['form']} action="" onSubmit={handleSubmit}>
      <div className={css['group']}>
        <label className={css['label']} htmlFor="">
          Username:
        </label>
        <input
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          name="name"
          onChange={handleChange}
          className={css['input']}
          type="text"
          title="The name can only contain letters, an apostrophe, a dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
          required
        />
      </div>
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
          className={css['input']}
          type="password"
          title="Should be at least 7 characters"
          required
        />
      </div>
      <div className={css['group']}>
        <button className={css['button']} type="submit">
          Registration
        </button>
      </div>
    </form>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
