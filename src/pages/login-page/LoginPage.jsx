import { useEffect } from 'react';

//3rd party packages
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//components
import LoginForm from '../../components/login-form/LoginForm';

//styles
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state.user);

  useEffect(() => {
    if (auth.token) {
      navigate('/');
    }
  }, [navigate, auth]);

  return (
    <section className={styles.page_container}>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
