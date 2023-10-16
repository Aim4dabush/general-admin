//3rd party packages
import { Outlet } from 'react-router-dom';

//components
import Navbar from './components/navbar/Navbar';

//styles
import './App.scss';

const App = () => {
  return (
    <>
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
