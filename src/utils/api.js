// For api call
import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmVmOWIwMTAwZTAxYTY1YmM0ODEyNzVlNGE2YWNlZCIsInN1YiI6IjYzZGE3MWU5M2RjMzEzMDA4MjMzYjgzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PVWIOfVyxtRZYyB7Cea_QTR4KLJlf1o6b5ebD4WnaZw';

const headers ={
    Authorization: "bearer "+ TMDB_TOKEN,
};

export const fetchDataFromApi = async(url,params)=>{
    try{
        const {data} = await axios.get(BASE_URL + url,{
            headers,
            params
        })
        return data;
    }
    catch(err){
        console.log(err);
        return err;
    }
}