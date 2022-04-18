import react from "react";

class Weather extends react.Component{
  render(){
    return (
      <div align="center">
      {this.props.city &&
        <div>
    <p> Местоположение: {this.props.city},{this.props.country}</p>
    <p> Температура: {this.props.temp}</p>
    <p> Заход солнца: {this.props.sunset}</p>
    <p> Сила ветра: {this.props.wind}</p>
    </div>
}
<p> {this.props.error}</p>
      </div>
    );
  }
}

export default Weather;
