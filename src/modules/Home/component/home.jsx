import { Link } from "react-router-dom";

const Acceuil = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
            style={{ backgroundImage: `url(./home.jpg)` }}
        >
            <div className="bg-black bg-opacity-50 p-8 rounded-lg">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 text-center">
                    Bienvenue sur notre site de recettes !
                </h1>
                <p className="text-lg lg:text-xl text-white mb-8 text-center">
                    Découvrez une sélection incroyable de recettes pour tous les goûts et toutes les occasions.
                </p>
                <Link
                    to="/all"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out inline-block"
                >
                    Explorer les recettes
                </Link>
            </div>
        </div>
    );
};

export default Acceuil;
