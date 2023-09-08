import axios from 'axios'
import { utilService } from './util.service'

const key = import.meta.env.VITE_WEATHER_KEY
const date = utilService.getDate()

export const weatherService = {
getWeatherDetails
}


async function getWeatherDetails (query){
try{
   const data = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${query}&days=7&dt=${date}&hour=18,21,00`)
   return data.data
}
catch(err){
    console.log(err);
}
}