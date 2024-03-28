import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Ingredient() {
    // Création d'un état pour stocker tous les ingrédients filtrés par nos données    
    const [ingredientImages, setIngredientImages] = useState({});
    
    // État pour l'ingrédient sélectionné 
    const [selectedIngredient, setSelectedIngredient] = useState(null);

    // Récupération de nos données depuis le store Redux
    const recipe = useSelector((state) => state.search.data);

    // Effet pour mettre à jour les images des ingrédients lorsque la recette est mise à jour
    useEffect(() => {
        if (recipe && recipe.meals && recipe.meals.length > 0) {
            const newIngredientImages = {};
            for (let i = 1; i <= 20; i++) {
                const ingredient = recipe.meals[0][`strIngredient${i}`];
                if (ingredient) {
                    const ingredientKey = ingredient.toLowerCase().replace(/ /g, '_');
                    newIngredientImages[ingredientKey] = `https://www.themealdb.com/images/ingredients/${ingredient}.png`;
                }
            }
            setIngredientImages(newIngredientImages);
        }
    }, [recipe]);

    const getIngredientImage = (ingredient) => {
        const ingredientKey = ingredient.toLowerCase().replace(/ /g, '_');
        return ingredientImages[ingredientKey] || null;
    };

    // Gestion du clic sur un ingrédient pour afficher le modal de l'ingrédient agrandi
    const handleIngredientClick = (ingredient) => {
        setSelectedIngredient(ingredient);
    };

    // Gestion de la fermeture du modal de l'ingrédient agrandi
    const handleCloseModal = () => {
        setSelectedIngredient(null);
    };

    return (
        <>
            {recipe && recipe.meals && recipe.meals.length > 0 && // Vérifier que recipe.meals[0] existe
                Object.keys(recipe.meals[0])
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
            
            {/* Affichage du modal de l'ingrédient agrandi */}
            {selectedIngredient && ingredientImages[selectedIngredient.toLowerCase().replace(/ /g, '_')] && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-8">
                        <img src={ingredientImages[selectedIngredient.toLowerCase().replace(/ /g, '_')]} alt={selectedIngredient} className="w-auto max-h-full" />
                        <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Ingredient;
