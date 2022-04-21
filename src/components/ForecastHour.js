import React from 'react';


const ForecastHour = props => {
  const { temp, month, day,icon } = props;
  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

  return (
    <div className='forecast'>
      <div className="text">
        {month}.{day}
      </div>
      <div className='text' weight="400">
        {temp}&#176;
      </div>
    </div>
  );
};

export default ForecastHour;