import React from 'react';
import ReactDOM from 'react-dom/client';

//3rd party packages
import { BrowserRouter } from 'react-router-dom';

//routes
import AppRoutes from './routes/AppRoutes';

//styles
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
