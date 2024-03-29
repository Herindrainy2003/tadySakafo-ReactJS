import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getData } from "../../../Redux/Actions/GetRecipe";


function AllRecipe() {
  const data = useSelector((state) => state.getAllRepice.data)

  const dispatch = useDispatch()

  console.log(data)
  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  if (!data || !data.meals || !data.meals.length === 0) {
    return null
  }
  return (
    <div>
      <div className=" m-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {data.meals.map((recipe) => (
          <div key={recipe.idMeal} className="flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-32 h-32 object-cover rounded-full shadow-lg hover:shadow-xl" />
            <p className="text-center mt-2 font-semibold text-gray-800">{recipe.strMeal}</p>
          </div>
        ))}
      </div>


    </div>
  )
}

export default AllRecipe
