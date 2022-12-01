import { useState } from "react";
import axios from "axios";
import "./App.css";

let baseUrl = ``;
if (window.location.href.split(":")[0] === "http") {
  baseUrl = `http://localhost:5001`;
}

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("I am click handler");
    axios
      .get(`${baseUrl}/weather${cityName}`)
      .then((response) => {
        console.log("response: ", response.data);

        setWeatherData(response.data);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
        <h1 className="header my-3">Weather App</h1>
      </nav>
      <div>
        <form onSubmit={submitHandler} className="search my-5">
          <input
            className="getweather form-control"
            type="text"
            placeholder="Search weather"
            required
            onChange={(e) => {
              setCityName(e.target.value);
            }}
          />
          <button type="submit" className="btn btn-primary my-5">
            get weather
          </button>
        </form>

        {weatherData === null ? null : (
          <div className="main my-5">
            <h3><label htmlFor="">City:</label>        {weatherData?.city}</h3>
            
            <h3><label htmlFor="">Temperature:</label> {Math.round(weatherData?.temp)}°C</h3>
           
            <h3><label htmlFor="">Min</label>          {Math.round(weatherData?.min)}°C</h3>
           
            <h3><label htmlFor="">Max:</label>         {Math.round(weatherData?.max)}°C</h3>
          
            <h3><label htmlFor="">Humadity:</label>   {Math.round(weatherData?.humadity)}°C</h3> 
          </div>
        )}
      </div>
    </>
  );
}

export default App;
