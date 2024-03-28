import RecipeDetails from "../../modules/Food/component/food"
import SearchRecipes from "../../modules/Search/component/search"

function Home() {
  return (
    <div>
     <SearchRecipes />
     <RecipeDetails/>
    </div>
  )
}

export default Home
