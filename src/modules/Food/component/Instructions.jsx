import { useSelector } from 'react-redux';
function Instructions() {
  const recipe = useSelector((state) => state.search.data);
  const {
    strInstructions,
  } = recipe.meals[0];



  return (
    <div>
      <p className="text-lg font-medium text-blue-600">Instructions:</p>
      <p className="text-gray-700">{strInstructions}</p>
    </div>
  )
}

export default Instructions
