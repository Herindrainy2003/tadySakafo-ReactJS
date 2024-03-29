import { Link } from 'react-router-dom';
import SearchRecipes from '../Search/component/search';

function Navbar() {

    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-black ">
            <Link to="/" className="text-xl font-bold hover:text-white">
                Accueil
            </Link>
            <Link to="/all" className="text-base font-bold  hover:text-white">
                Tout Les Plats
            </Link>
            <div className="flex items-center rounded-full overflow-hidden">
                <SearchRecipes />
            </div>
        </nav>
    );
}

export default Navbar;
