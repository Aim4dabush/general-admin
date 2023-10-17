//3rd party packages
import { Link } from 'react-router-dom';

//components
import SharedButton from '../shared/shared-button/SharedButton';
import SharedInput from '../shared/shared-input/SharedInput';

//styles
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  return (
    <form className={styles.login_form}>
      <h3 className={styles.login_title}>User Login</h3>
      <SharedInput>Email</SharedInput>
      <SharedInput>Password</SharedInput>
      <div className={styles.button_wrapper}>
        <SharedButton success={true} fullWidth={true}>
          Login
        </SharedButton>
      </div>
      <p className={styles.text}>
        Not registered? Register <Link to={'/register'}>here</Link>
      </p>
    </form>
  );
};

export default LoginForm;
