//3rd party packages
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//components
import SharedButton from '../shared/shared-button/SharedButton';
import SharedInput from '../shared/shared-input/SharedInput';
import SharedSelect from '../shared/shared-select/SharedSelect';

//hooks
import useValidation from '../../hooks/useValidation';

//services
import { registerUser } from '../../services/auth-services';

//styles
import styles from './RegisterForm.module.scss';

//utils
import { stateOptions } from '../../utils/states';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    error: birthdayError,
    isValid: birthdayIsValid,
    value: birthday,
    blurHandler: birthdayBlurHandler,
    changeHandler: birthdayChangeHandler,
    resetHandler: birthdayReset,
  } = useValidation((value) => value.trim() !== '');
  const {
    error: cityError,
    isValid: cityIsValid,
    value: city,
    blurHandler: cityBlurHandler,
    changeHandler: cityChangeHandler,
    resetHandler: cityReset,
  } = useValidation((value) => value.trim() !== '');
  const {
    error: confirmError,
    isValid: confirmIsValid,
    value: confirm,
    blurHandler: confirmBlurHandler,
    changeHandler: confirmChangeHandler,
    resetHandler: confirmReset,
  } = useValidation((value) => value.trim() !== '');
  const {
    error: emailError,
    isValid: emailIsValid,
    value: email,
    blurHandler: emailBlurHandler,
    changeHandler: emailChangeHandler,
    resetHandler: emailReset,
  } = useValidation((value) => value.trim() !== '' && value.includes('@'));
  const {
    error: firstNameError,
    isValid: firstNameIsValid,
    value: firstName,
    blurHandler: firstNameBlurHandler,
    changeHandler: firstNameChangeHandler,
    resetHandler: firstNameReset,
  } = useValidation((value) => value.trim() !== '' && value.length >= 2);
  const {
    error: lastNameError,
    isValid: lastNameIsValid,
    value: lastName,
    blurHandler: lastNameBlurHandler,
    changeHandler: lastNameChangeHandler,
    resetHandler: lastNameReset,
  } = useValidation((value) => value.trim() !== '' && value.length >= 2);
  const {
    error: passwordError,
    isValid: passwordIsValid,
    value: password,
    blurHandler: passwordBlurHandler,
    changeHandler: passwordChangeHandler,
    resetHandler: passwordReset,
  } = useValidation((value) => value.trim() !== '' && value.length >= 6);
  const {
    error: phoneError,
    isValid: phoneIsValid,
    value: phoneNumber,
    blurHandler: phoneBlurHandler,
    changeHandler: phoneChangeHandler,
    resetHandler: phoneReset,
  } = useValidation((value) => value.trim() !== '' && value.length === 10);
  const {
    error: stateError,
    isValid: stateIsValid,
    value: state,
    blurHandler: stateBlurHandler,
    changeHandler: stateChangeHandler,
    resetHandler: stateReset,
  } = useValidation((value) => value.trim() !== '');
  const {
    error: streetError,
    isValid: streetIsValid,
    value: street,
    blurHandler: streetBlurHandler,
    changeHandler: streetChangeHandler,
    resetHandler: streetReset,
  } = useValidation((value) => value.trim() !== '');
  const {
    error: zipError,
    isValid: zipIsValid,
    value: zipCode,
    blurHandler: zipBlurHandler,
    changeHandler: zipChangeHandler,
    resetHandler: zipReset,
  } = useValidation((value) => value.toString().length === 5);
  let formIsValid = false;

  if (
    birthdayIsValid &&
    cityIsValid &&
    confirmIsValid &&
    emailIsValid &&
    firstNameIsValid &&
    lastNameIsValid &&
    passwordIsValid &&
    phoneIsValid &&
    stateIsValid &&
    streetIsValid &&
    zipIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid && confirm !== password) {
      return;
    }

    const registerData = {
      address: {
        city,
        state,
        street,
        zipCode,
      },
      birthday,
      email,
      firstName,
      lastName,
      password,
      phoneNumber,
    };

    dispatch(registerUser(registerData));
    birthdayReset();
    cityReset();
    confirmReset();
    emailReset();
    firstNameReset();
    lastNameReset();
    passwordReset();
    phoneReset();
    stateReset();
    streetReset();
    zipReset();
    navigate('/login');
  };

  return (
    <form className={styles.register_form} onSubmit={submitHandler}>
      <h3 className={styles.register_title}>User Registration</h3>
      <div className={styles.content}>
        <SharedInput
          blurHandler={firstNameBlurHandler}
          changeHandler={firstNameChangeHandler}
          id={'firstName'}
          inputError={firstNameError}
          inputType={'text'}
          inputValue={firstName}
          message={'Please enter a valid first name'}
        >
          First Name
        </SharedInput>
        <SharedInput
          blurHandler={lastNameBlurHandler}
          changeHandler={lastNameChangeHandler}
          id={'lastName'}
          inputError={lastNameError}
          inputType={'text'}
          inputValue={lastName}
          message={'Please enter a valid last name'}
        >
          Last Name
        </SharedInput>
      </div>
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
      <div className={styles.content}>
        <SharedInput
          blurHandler={phoneBlurHandler}
          changeHandler={phoneChangeHandler}
          id={'phoneNumber'}
          inputError={phoneError}
          inputType={'text'}
          inputValue={phoneNumber}
          message={'Please enter a valid phone number'}
        >
          Phone Number
        </SharedInput>
        <SharedInput
          blurHandler={birthdayBlurHandler}
          changeHandler={birthdayChangeHandler}
          id={'birthday'}
          inputError={birthdayError}
          inputType={'date'}
          inputValue={birthday}
          message={'Please select a date'}
        >
          Birthday
        </SharedInput>
      </div>
      <SharedInput
        blurHandler={streetBlurHandler}
        changeHandler={streetChangeHandler}
        id={'street'}
        inputError={streetError}
        inputType={'text'}
        inputValue={street}
        message={'Please enter a valid street address'}
      >
        Street
      </SharedInput>
      <div className={styles.content}>
        <SharedInput
          blurHandler={cityBlurHandler}
          changeHandler={cityChangeHandler}
          id={'city'}
          inputError={cityError}
          inputType={'text'}
          inputValue={city}
          message={'Please enter a valid city'}
        >
          City
        </SharedInput>
        <SharedSelect
          blurHandler={stateBlurHandler}
          changeHandler={stateChangeHandler}
          id={'state'}
          message={'Please select a state'}
          selectError={stateError}
          selectOptions={stateOptions}
          selectValue={state}
        >
          State
        </SharedSelect>
        <SharedInput
          blurHandler={zipBlurHandler}
          changeHandler={zipChangeHandler}
          id={'zipCode'}
          inputError={zipError}
          inputType={'number'}
          inputValue={zipCode}
          message={'Please enter a valid zip code'}
        >
          Zip Code
        </SharedInput>
      </div>
      <div className={styles.content}>
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
        <SharedInput
          blurHandler={confirmBlurHandler}
          changeHandler={confirmChangeHandler}
          id={'confirm'}
          inputError={password !== confirm}
          inputType={'password'}
          inputValue={confirm}
          message={'Passwords do not match'}
        >
          Confirm Password
        </SharedInput>
      </div>
      <div className={styles.button_wrapper}>
        <SharedButton fullWidth={true} success={true}>
          Register User
        </SharedButton>
      </div>
    </form>
  );
};

export default RegisterForm;
