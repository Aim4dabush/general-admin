//styles
import styles from './SharedInput.module.scss';

const SharedInput = ({
  blurHandler,
  changeHandler,
  children,
  id,
  inputError,
  inputType,
  inputValue,
  message,
}) => {
  const borderErrorStyle = inputError && styles.border_error;
  const textErrorStyle = inputError && styles.text_error;

  return (
    <div className={styles.input_control}>
      <label className={`${textErrorStyle}`} htmlFor={id}>
        {children}
      </label>
      <input
        className={`${borderErrorStyle}`}
        id={id}
        name={id}
        type={inputType}
        value={inputValue}
        onBlur={blurHandler}
        onChange={changeHandler}
      />
      {inputError && <p className={`${textErrorStyle}`}>{message}</p>}
    </div>
  );
};

export default SharedInput;
