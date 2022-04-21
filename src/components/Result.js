
import React from "react";
import ForecastHour from './ForecastHour';



const Result = ({ weather }) => {
    const {
        city,
        country,
        date,
        temp,
        sunset,
        sunrise,
        humidity,
        wind,

        forecast,
    } = weather;

    const forecasts = forecast.map(item => (
        <ForecastHour
            key={item.dt}
            temp={Math.floor(item.main.temp * 1) / 1}
            month={item.dt_txt.slice(5, 7)}
            day={item.dt_txt.slice(8, 10)}

        />
    ));


    return (

        <div>
            <div>
                <h3 className="locationWrapper"> {city}, {country} </h3>
                <h3>{date}</h3>
                <h2>Погода сейчас</h2>
                <div className="currentWeather">

                    <h3>{Math.floor(temp)}&#176;</h3>
                </div>

                <p>Восход солнца: {sunrise}</p>
                <p>Закат: {sunset}</p>
                <p>Влажность:{humidity}</p>
                <p>Сила ветра: {wind}</p>

            </div>
            <div className="forecastWrapper">
                <h3>Погода на 5 дней</h3>
                <div className="forecast">
                    {forecasts}


                </div>
            </div>
        </div>
    );



};
export default Result;
