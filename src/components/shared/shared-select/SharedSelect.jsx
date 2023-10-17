//styles
import styles from './SharedSelect.module.scss';

const SharedSelect = ({
  blurHandler,
  changeHandler,
  children,
  id,
  selectError,
  selectOptions,
  selectValue,
  message,
}) => {
  const borderErrorStyle = selectError && styles.border_error;
  const textErrorStyle = selectError && styles.text_error;

  return (
    <div className={styles.select_control}>
      <label className={`${textErrorStyle}`} htmlFor={id}>
        {children}
      </label>
      <select
        className={`${borderErrorStyle}`}
        id={id}
        name={id}
        value={selectValue}
        onBlur={blurHandler}
        onChange={changeHandler}
      >
        {selectOptions.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {selectError && <p className={`${textErrorStyle}`}>{message}</p>}
    </div>
  );
};

export default SharedSelect;
