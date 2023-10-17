//components
import RegisterForm from '../../components/register-form/RegisterForm';

//styles
import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
  return (
    <section className={styles.page_container}>
      <RegisterForm />
    </section>
  );
};

export default RegisterPage;
