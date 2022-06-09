
import axios from "axios"

export async function getDepartures(){
try{
return await axios.get( `http://localhost:8888/.netlify/functions/get-departures`)
}
catch(error){
console.log(error)
}
}

export async function getWeather(){
    try{
    return await axios.get( `http://localhost:8888/.netlify/functions/get-weather`)
    }
    catch(error){
    console.log(error)
    }
    }