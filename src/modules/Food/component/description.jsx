import { useSelector } from 'react-redux';

function DescriptionFood() {
    //recuperation nos donnes depuis store
    const repice = useSelector((state) => state.search.data)
    
    //destricting de nos categories et nom..
    const {
        strMeal,
        strCategory,
        strArea
    } = repice.meals[0]

    return (
        <div>
            <h2 className="text-3xl font-semibold text-blue-600">{strMeal}</h2>
            <p className="text-gray-600 mt-2">Category: <span className="text-green-500">{strCategory}</span></p>
            <p className="text-gray-600">Area: <span className="text-green-500">{strArea}</span></p>
        </div>
    )
}

export default DescriptionFood

/**
 * une component qui occupe la partie description comme le categories,nom,..
 */
