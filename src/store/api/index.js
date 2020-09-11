import axios from "axios";
import { GET, POST, PUT, DELETE } from "../../resources/globalConstants";

export async function apiCall(method, body, url){
    const headers ={
        'headers':{
            'Authorization': localStorage.getItem("Authorization"),
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        }
    }
    try{
        switch(method){
            case GET:
                return (await axios.get(url, body,  headers)).data;
            case POST:
                return (await axios.post(url, body, headers)).data;
            case PUT:
                return (await axios.put(url, body, headers)).data;
            case DELETE:
                return (await axios.delete(url, body, headers)).data;
            default:
                return "metodo no soportado";
        }
    }catch(error){
        throw error;
    }
}