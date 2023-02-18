import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Main = () => {
    let [city, setCity] = useState("");
    let [data, setData] = useState([]);
    let [search, setSearch] = useState(false);

    useEffect(() => {
        
        let weatherData = async () => {
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0cfc67891ebff2f44a1d5687b0700c0a&units=metric`);
            let j_data = await res.json();
            setData([j_data]);
        };
   
        if (search) {
            try{
            weatherData();
            }
            catch(err){
                console.log(err);
            }
        }
        setSearch(false);
    }, [search,city]);

    let handleSubmit = e => {
        e.preventDefault();
        console.log("submitted");
        setSearch(true);
    }
    return (
        <section>
            <article>
                <form onSubmit={handleSubmit}>
                    <label>Enter city name:</label>
                    <input type="text" placeholder='Search city..' onChange={e => { setCity(e.target.value) }}></input>
                    <br></br>
                    <button>Search</button>
                </form>

                <article>
                    {
                        data.map(value => {
                            return (
                                <div key={Math.random()}>
                                    <h1>{value.name}</h1>
                                    <img src={`https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`} alt={value.name} width={150}></img>
                                    <br></br>
                                    <p><span>{value.weather[0].description}</span></p>
                                    <br></br>
                                    <p><span>Temp:</span> {value.main.temp} <sup>o</sup>C</p>
                                    <br></br>
                                    <p><span>min_temp:</span> {value.main.temp_min} <sup>o</sup>C | <span>max_temp:</span> {value.main.temp_max} <sup>o</sup>C</p>
                                    <br></br>
                                    <p><span>Longitude:</span> {value.coord.lon} <sup>o</sup>N | <span>Latitude:</span> {value.coord.lat} <sup>o</sup>N</p>
                                    <br></br>
                                    <p><span>Humidity:</span> {value.main.humidity}%</p>
                                    <br></br>
                                    <p><span>Visibility:</span> {value.visibility} m</p>
                                    <br></br>
                                    <p><span>Wind Speed:</span> {value.wind.speed} m/s</p>

                                </div>
                            )
                        })
                    }
                </article>
            </article>
        </section>
    )
}

export default Main