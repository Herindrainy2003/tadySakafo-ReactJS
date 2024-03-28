import {createBrowserRouter} from 'react-router-dom';
import Home from '../Component/Home/Home';



const routes=[
   { 
    path : '/',
    element : <Home />
},


]

const Routes = createBrowserRouter(routes)

export default Routes;