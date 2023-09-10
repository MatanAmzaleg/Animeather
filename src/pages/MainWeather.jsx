import { useEffect, useState } from "react";




export const MainWeather = ({ weatherData, fetchCurrLocationData}) => {
  console.log(weatherData);

  const [add,setAdd] = useState('')
  // `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
  
  useEffect(()=>{
      navigator.geolocation.getCurrentPosition(pos=>{
          const {latitude,longitude} = pos.coords;
          console.log(latitude,longitude)
          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=en`;
          fetch(url).then(res=>res.json()).then(data=>setAdd(data.address))
      })
  },[])



  return (
    <section className="main-weather-sec debug flex">
      <div className="city-sec debug">
        <h1 className="location">{weatherData ? weatherData.location.name : add.city},</h1>
        <h1 className="location">{weatherData ? weatherData.location.country: add.country}</h1>
      </div>
      <div className="weekly-weather-sec flex column"></div>
    </section>
  );
};
