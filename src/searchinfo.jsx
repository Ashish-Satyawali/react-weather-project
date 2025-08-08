import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Weather.css'
import { useState } from 'react';
import Infobox from './info';

export default function Searchinfo ({updateinfo}){
    const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
    let [city,setcity] = useState("");
    let [error,seterror] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = weatherApiKey
    
    let handleCity = (evt)=>{
        setcity(evt.target.value);
    }

    let getWeatherData = async ()=>{
        try
        {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json();
            let result = {
                city:city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            updateinfo(result)
            seterror(false);
        }
        catch(err){
            console.log(err);
            seterror(true);
        }
    }
    let submitHandler = (evt)=>{
        evt.preventDefault();
        setcity("");
        getWeatherData();
    }

    return(
        <div className='wether'>
            <h1>weather updates</h1>
            <form onSubmit={submitHandler}>
                <TextField id="city" label="City" variant="outlined" value={city} onChange={handleCity} required style={{backgroundColor:'#5a5a5a'}}/><br/><br/>
                <Button variant="contained" type='submit' >
                    Search
                </Button><br/><br/><br/>
                {error? <p style={{color:"red"}}>does not have the weather update of this place!!</p>:null}
            </form>
        </div>
    )
}