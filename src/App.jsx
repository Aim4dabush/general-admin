import { useEffect } from 'react';

//3rd party packages
import { DateTime } from 'luxon';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

//components
import Modal from './modal/Modal';
import Navbar from './components/navbar/Navbar';

//services
import { signOutUser } from './services/auth-services';

//styles
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state.user);

  useEffect(() => {
    let autoLogout;
    const expirationTime = auth.expiration - DateTime.now().toMillis();

    if (auth.token && auth.expiration) {
      autoLogout = setTimeout(() => {
        dispatch(signOutUser());
        navigate('/');
      }, expirationTime);
    }

    return () => clearTimeout(autoLogout);
  }, [dispatch, navigate, auth]);

  return (
    <>
      <Modal />
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
