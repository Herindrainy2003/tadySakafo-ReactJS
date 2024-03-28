import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { getData } from '../../../Redux/Actions';

const SearchRecipes = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch()

  //recuperation et chamngement la valeur de  state
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //Envoyer nos donnes dans notre reducers(getData) en  utilisant dispatch
  const handleSearch = () => {
    dispatch(getData(searchTerm))
  };

  return (
    <div className="flex items-center rounded-full overflow-hidden">
      <input
        type="text"
        placeholder="Rechercher..."
        className="py-2 px-4 focus:outline-none"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
        onClick={handleSearch}
      >
        <FiSearch />
      </button>
    </div>
  );
};

export default SearchRecipes;
