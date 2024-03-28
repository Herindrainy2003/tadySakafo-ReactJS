import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
//import {recipe} from '../data/data'

const RecipeDetails = () => {
    const [selectedIngredient, setSelectedIngredient] = useState(null);
    const [ingredientImages, setIngredientImages] = useState({});

    const recipe = useSelector((state) => state.search.data);
    
    useEffect(() => {
        if (recipe && recipe.meals && recipe.meals.length > 0) {
            const newIngredientImages = {};
            for (let i = 1; i <= 20; i++) {
                const ingredient = recipe.meals[0][`strIngredient${i}`];
                if (ingredient) {
                    // Convertir le nom de l'ingrédient en une clé valide pour l'objet ingredientImages
                    const ingredientKey = ingredient.toLowerCase().replace(/ /g, '_');
                    // Ajouter l'URL de l'image de l'ingrédient à l'objet newIngredientImages
                    newIngredientImages[ingredientKey] = `https://www.themealdb.com/images/ingredients/${ingredient}.png`;
                }
            }
            // Mettre à jour l'état avec le nouvel objet d'images d'ingrédients
            setIngredientImages(newIngredientImages);
        }
    }, [recipe]);

    if (!recipe || !recipe.meals || recipe.meals.length === 0) {
        return null;
    }

    const handleIngredientClick = (ingredient) => {
        setSelectedIngredient(ingredient);
    };

    const handleCloseModal = () => {
        setSelectedIngredient(null);
    };

    const getIngredientImage = (ingredient) => {
        // Convertir le nom de l'ingrédient en une clé valide pour l'objet ingredientImages
        const ingredientKey = ingredient.toLowerCase().replace(/ /g, '_');
        return ingredientImages[ingredientKey] || null;
    };


const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    // strTags,
    strYoutube,
    // strIngredient1,
    // strIngredient2,
    // strIngredient3,
    // strIngredient4,
    // strIngredient5,
    // strIngredient6,
    // strIngredient7,
    // strIngredient8,
    // strMeasure1,
    // strMeasure2,
    // strMeasure3,
    // strMeasure4,
    // strMeasure5,
    // strMeasure6,
    // strMeasure7,
    // strMeasure8
} = recipe.meals[0];


return (
    <div className="max-w-4xl mx-auto mt-8 bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
                <img src={strMealThumb} alt={strMeal} className="w-full h-auto rounded-md animate-pulse" />
            </div>
            <div className="md:w-1/2 md:ml-6">
                <h2 className="text-3xl font-semibold text-blue-600">{strMeal}</h2>
                <p className="text-gray-600 mt-2">Category: <span className="text-green-500">{strCategory}</span></p>
                <p className="text-gray-600">Area: <span className="text-green-500">{strArea}</span></p>
                <div className="mt-4">
                    {/* Ingredients*/}
                    <p className="text-lg font-medium text-blue-600">Ingredients:</p>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.keys(recipe.meals[0])
                            .filter(key => key.startsWith('strIngredient') && recipe.meals[0][key])
                            .map((key, index) => {
                                const ingredient = recipe.meals[0][key];
                                const measure = recipe.meals[0][`strMeasure${key.split('strIngredient')[1]}`];
                                const ingredientImage = getIngredientImage(ingredient);
                                return (
                                    <div key={index} className="flex items-center cursor-pointer" onClick={() => handleIngredientClick(ingredient)}>
                                        <img src={ingredientImage} alt={ingredient} className="w-6 h-6 inline-block mr-2" />
                                        <span>{measure} {ingredient}</span>
                                    </div>

                                );
                            })}
                    </div>
                    {/* instrucions */}
                    <div className="mt-4">
                        <p className="text-lg font-medium text-blue-600">Instructions:</p>
                        <p className="text-gray-700">{strInstructions}</p>
                    </div>
                    {/* video */}
                    <div className="mt-4">
                        <p className="text-lg font-medium text-blue-600">Video:</p>
                        <iframe
                            className="w-full h-full"
                            src={strYoutube}
                            title={strMeal}
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Modal pour afficher l'image agrandie */}
                {selectedIngredient && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                        <div className="bg-white rounded-lg p-8">
                            <img src={getIngredientImage(selectedIngredient)} alt={selectedIngredient} className="w-auto max-h-full" />
                            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
);
};


export default RecipeDetails;
