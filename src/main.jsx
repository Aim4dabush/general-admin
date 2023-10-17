import React from 'react';
import ReactDOM from 'react-dom/client';

//3rd party packages
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

//redux
import reduxStore from './redux/store';

//routes
import AppRoutes from './routes/AppRoutes';

//styles
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
