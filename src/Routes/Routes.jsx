import {createBrowserRouter} from 'react-router-dom';
import Home from '../Component/Home/Home';
import AllFood from '../Component/Home/allFood';

const routes=[
   { 
    path : '/',
    element : <Home />,
    },
   { 
    
    path : '/all',
    element :<AllFood />
} 
]

const Routes = createBrowserRouter(routes)

export default Routes;