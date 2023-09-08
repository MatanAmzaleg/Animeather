import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MainWeather } from "./pages/MainWeather.jsx";
import { SearchBar } from "./cmps/SearchBar";
import { Sidebar } from "./cmps/Sidebar.jsx";
import "./assets/styles/main.scss";
import { weatherService } from "./services/weahter.service";

function App() {
  const [weatherDetails, setWeatherDetails] = useState("");
  const [input, setInput] = useState("")

  useEffect(() => {
    let debounceTimeout;
    if(!input) return
    const fetchData = async () => {
      try {
        const weatherData = await weatherService.getWeatherDetails(input);
        setWeatherDetails(weatherData);
      } catch (err) {
        console.log("Error fetching weather data:", err);
      }
    };

    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(fetchData, 1500);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [input]);

  return (
    <>
      <section className="main-sec flex">
        <Sidebar></Sidebar>
        <div className="info-sec flex column">
          <SearchBar setInput={setInput} input={input}></SearchBar>
          <Routes>
            <Route path="/" element={<MainWeather weatherData={weatherDetails}/>}></Route>
          </Routes>
        </div>
      </section>
    </>
  );
}

export default App;
