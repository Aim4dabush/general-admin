//3rd party packages
import { Outlet } from 'react-router-dom';

//styles
import './App.scss';

const App = () => {
  return (
    <>
      <nav></nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
