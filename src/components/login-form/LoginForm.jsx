//3rd party packages
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

//components
import SharedButton from '../shared/shared-button/SharedButton';
import SharedInput from '../shared/shared-input/SharedInput';

//hooks
import useValidation from '../../hooks/useValidation';

//services
import { loginUser } from '../../services/auth-services';

//styles
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    error: emailError,
    isValid: emailIsValid,
    value: email,
    blurHandler: emailBlurHandler,
    changeHandler: emailChangeHandler,
    resetHandler: emailReset,
  } = useValidation((value) => value.trim() !== '' && value.includes('@'));
  const {
    error: passwordError,
    isValid: passwordIsValid,
    value: password,
    blurHandler: passwordBlurHandler,
    changeHandler: passwordChangeHandler,
    resetHandler: passwordReset,
  } = useValidation((value) => value.trim() !== '' && value.length >= 6);
  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    const loginData = {
      email,
      password,
    };

    dispatch(loginUser(loginData));
    emailReset();
    passwordReset();
  };

  return (
    <form className={styles.login_form} onSubmit={submitHandler}>
      <h3 className={styles.login_title}>User Login</h3>
      <SharedInput
        blurHandler={emailBlurHandler}
        changeHandler={emailChangeHandler}
        id={'email'}
        inputError={emailError}
        inputType={'email'}
        inputValue={email}
        message={'Please enter a valid email'}
      >
        Email
      </SharedInput>
      <SharedInput
        blurHandler={passwordBlurHandler}
        changeHandler={passwordChangeHandler}
        id={'password'}
        inputError={passwordError}
        inputType={'password'}
        inputValue={password}
        message={'Please enter a valid password'}
      >
        Password
      </SharedInput>
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
