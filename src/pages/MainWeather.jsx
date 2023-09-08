

 export const MainWeather = ({weatherData}) => {

console.log(weatherData);

    return(
        <section className="main-weather-sec debug flex">
            <div className="city-sec debug">
            <h1 className="location">{weatherData.location.name},</h1>
            <h1 className="location">{weatherData.location.country}</h1>
            </div>
            <div className="weekly-weather-sec flex column">

            </div>
        </section>
    )
}