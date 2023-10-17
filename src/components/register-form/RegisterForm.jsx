//components
import SharedButton from '../shared/shared-button/SharedButton';
import SharedInput from '../shared/shared-input/SharedInput';
import SharedSelect from '../shared/shared-select/SharedSelect';

//styles
import styles from './RegisterForm.module.scss';

//utils
import { stateOptions } from '../../utils/states';

const RegisterForm = () => {
  return (
    <form className={styles.register_form}>
      <h3 className={styles.register_title}>User Registration</h3>
      <div className={styles.content}>
        <SharedInput>First Name</SharedInput>
        <SharedInput>Last Name</SharedInput>
      </div>
      <SharedInput>Email</SharedInput>
      <div className={styles.content}>
        <SharedInput>Phone Number</SharedInput>
        <SharedInput>Birthday</SharedInput>
      </div>
      <SharedInput>Street</SharedInput>
      <div className={styles.content}>
        <SharedInput>City</SharedInput>
        <SharedSelect selectOptions={stateOptions}>State</SharedSelect>
        <SharedInput>Zip Code</SharedInput>
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
