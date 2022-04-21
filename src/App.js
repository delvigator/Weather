import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Result from "./components/Result"

const API = "a5adf010f6d322154d396a6a296ffaa4";

class App extends React.Component {

  state = {
    value: '',
    weatherInfo: null,
    error: false,

  }

  gettingWeather = async (event) => {
    event.preventDefault();
    var city = event.target.elements.city.value;
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API}&units=metric`;
    Promise.all([fetch(weather), fetch(forecast)])
      .then(([res1, res2]) => {
        if (res1.ok && res2.ok) {
          return Promise.all([res1.json(), res2.json()]);
        }
        throw Error(res1.statusText, res2.statusText);
      })
      
      .then(([data1, data2]) => {
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'Nocvember',
          'December',
        ];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]
          }`;
        const sunset = new Date(data1.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
        const sunrise = new Date(data1.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);

        const weatherInfo = {
          city: data1.name,
          country: data1.sys.country,
          date,
          temp: data1.main.temp,
          sunrise,
          sunset,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
          forecast: data2.list.filter(reading => reading.dt_txt.includes("18:00:00")),
        };
        this.setState({
          weatherInfo,
          error: false,
        });
      })


      .catch(error => {
        console.log(error);

        this.setState({
          error: true,
          weatherInfo: null,
        });
      });
  };


  render() {
    const { value, weatherInfo, error } = this.state;
    return (
      <div className="wrapper">
        <div className=".weatherWrapper">

          <Info />

          <Form
            weatherMethod={this.gettingWeather}
            showResult={(weatherInfo || error) && true}
          />

          {weatherInfo && <Result weather={weatherInfo} />}

        </div>
      </div>

    );
  }
}

export default App;
