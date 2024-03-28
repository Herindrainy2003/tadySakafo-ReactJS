import ReactDOM from 'react-dom/client'
import Routes from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'
import './index.css'
import store from './Redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <RouterProvider router={Routes} />
  </Provider>

  ,
)
