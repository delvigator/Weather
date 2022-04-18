import react from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/Weather"

const API="a5adf010f6d322154d396a6a296ffaa4";

class App extends react.Component{

state = {
  temp: undefined,
  city:undefined,
  country: undefined,
  sunrise: undefined,
  sunset: undefined,
  wind:undefined,
  error:undefined
}

  gettingWeather = async (event) => {
    event.preventDefault();
    var city=event.target.elements.city.value;
    const api = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`);
    const data = await api.json();

if(data.name!=null){

var date = new Date(data.sys.sunset*1000);
var hours = date.getHours();
var minutes = "0" + date.getMinutes();
var seconds = "0" + date.getSeconds();
var sunset_date = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);


this.setState({
  temp: data.main.temp,
  city: data.name,
  country: data.sys.country,
  sunset: sunset_date,
  wind:data.wind.speed,
  error:undefined
});

}

else {
  this.setState({
  temp: undefined,
  city:undefined,
  country: undefined,
  sunset: undefined,
  wind:undefined,
  error:"Введите название города"
    });

}
}
  render(){

    return(
       <div>
       <Info />
       <Form
       weatherMethod={this.gettingWeather}
       />
       <Weather
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        sunset={this.state.sunset}
        wind={this.state.wind}
        error={this.state.error}
       />
       </div>
     );
  }
}

export default App;
