import { SEARCH_TERM_FAIL, SEARCH_TERM_REQUEST } from "../../constants"
import axios from 'axios'
import { api } from "../../../modules/Search/Api/url";
import { SEARCH_TERM_SUCCES } from "../../Reducers/SearchTerm/index";

export const getData = (url) =>async(dispacth) => {
    try {
        dispacth({ Loading: true, type: SEARCH_TERM_REQUEST })
        const { data } = await axios.get(api + url)
        dispacth(SEARCH_TERM_SUCCES(data)) //envoyer les donnes depuis axios dans notre reducers avec le SEARCH_TERM_SUCCES
    }catch (error) {
        dispacth({ Loading: false, type: SEARCH_TERM_FAIL })

    }
}



/**
 * c'est ici qu'on recupere nos donnes en utilisant axios ,
 * et on va envoyer dans notre reducers en utilisant dispatch 
 *
 */