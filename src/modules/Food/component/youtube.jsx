import { useSelector } from 'react-redux';

function Youtube() {
   
    const recipe = useSelector((state) => state.search.data);
    const {
        strMeal,
        strYoutube,
    } = recipe.meals[0];
    return (
        <div>
            <iframe
                className="w-full h-full"
                src={strYoutube}
                title={strMeal}
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default Youtube
