import GetUrl from "../../Search/Api/geturl"
import axios from 'axios'
function getdata(){
    const data = axios.get(GetUrl)
    console.log(GetUrl)
    return data.json()
}

export  {getdata}
