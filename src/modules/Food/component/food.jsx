import { useSelector } from 'react-redux';
import ImageFood from "./imageFood";
import DescriptionFood from './description';
import Ingredient from './Ingredient';
import Instructions from './Instructions';
import Youtube from './youtube';



const RecipeDetails = () => {

    const recipe = useSelector((state) => state.search.data);
    if (!recipe || !recipe.meals || recipe.meals.length === 0) {
        return null;
    }
    


    return (
        <div className="max-w-4xl mx-auto mt-8 bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row">

                <div className="md:w-1/2">
                    {/* Affichage de l'image */}
                    <ImageFood />
                </div>

                <div className="md:w-1/2 md:ml-6">
                    {/** Descriptions de nos plats */}
                    <DescriptionFood />
                    <div className="mt-4">

                        {/* Ingredients*/}
                        <p className="text-lg font-medium text-blue-600">Ingredients:</p>

                        <div className="grid grid-cols-2 gap-4">
                            <Ingredient />
                        </div>

                        {/* instrucions */}
                        <div className="mt-4">
                           <Instructions />
                        </div>
                        {/* video */}
                        <div className="mt-4">
                            <p className="text-lg font-medium text-blue-600">Video:</p>
                           <Youtube />
                        </div>
                    </div>

                    {/* Modal pour afficher l'image agrandie */}
                   
                </div>
            </div>
        </div>
    );
};


export default RecipeDetails;
