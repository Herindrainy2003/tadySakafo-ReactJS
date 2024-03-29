import { GET_RECIPE_FAIL, GET_RECIPE_REQUEST } from "../../constants"
import axios from 'axios'
import { api } from "../../../modules/AllRecipe/Api/api";
import { GET_RECIPE_SUCCES } from '../../Reducers/GetRecipe/index'


export const getData = () => async (dispacth) => {
    try {
        dispacth({ Loading: true, type: GET_RECIPE_REQUEST })
        const { data } = await axios.get(api)
        //console.log(data)
        dispacth(GET_RECIPE_SUCCES(data)) //envoyer les donnes depuis axios dans notre reducers avec le SEARCH_TERM_SUCCES
    } catch (error) {
        dispacth({ Loading: false, type: GET_RECIPE_FAIL })

    }
}



/**
 * c'est ici qu'on recupere nos donnes en utilisant axios ,
 * et on va envoyer dans notre reducers en utilisant dispatch 
 *
 */