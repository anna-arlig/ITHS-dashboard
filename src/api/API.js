
import axios from "axios"

const RESBOT_KEY = process.env.RESBOT_KEY

export async function getDepartures(){
try{
return await axios.get( `https://api.resrobot.se/v2.1/departureBoard?id=740004046&format=json&accessId=${RESBOT_KEY}`)
}
catch(error){
console.log(error)
}
}