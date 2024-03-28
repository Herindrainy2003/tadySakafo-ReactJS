
import { useSelector } from 'react-redux';

const ImageFood = () => {

  const recipe = useSelector((state) => state.search.data)
  const { strMeal, strMealThumb } = recipe.meals[0]

  return (
    <div>
      <img src={strMealThumb} alt={strMeal} className="w-full h-auto rounded-md animate-pulse" />
    </div>
  )
}

export default ImageFood


/**
 * retourne l'image de notre plat
 */