import { SEARCH_TERM_FAIL, SEARCH_TERM_REQUEST} from "../constants"
import axios from 'axios'
import { api } from "../../modules/Search/Api/url";
import { SEARCH_TERM_SUCCES } from "../Reducers";

export const getData = (url)=>async(dispacth)=>{
    try {
        dispacth({Loading:true , type : SEARCH_TERM_REQUEST})
        const { data } =  await axios.get(api+url)
       dispacth(SEARCH_TERM_SUCCES(data))


    } catch (error) {
        dispacth({Loading : false ,type : SEARCH_TERM_FAIL})

    }
}