//components
import LoginForm from '../../components/login-form/LoginForm';

//styles
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <section className={styles.page_container}>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
