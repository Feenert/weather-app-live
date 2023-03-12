import axios from 'axios';
import React, { useState, useEffect } from 'react';

export function Weather() {

const [date, setDate] = useState('');
const [location, setLocation] = useState('');
const [region, setRegion] = useState('');
const [temp, setTemp] = useState('');
const [icon, setIcon] = useState();
const [iconText, setIconText] = useState('');
const [wind, setWind] = useState('');
const [windDir, setWindDir] = useState('');
const [windGust, setWindGust] = useState('');
const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: '<85008>'},
  headers: {
    'X-RapidAPI-Key': '0933fce9dbmsh3ced69b6ee84efdp1c2a1ajsn29cff3fad02d',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
  setDate(response.data.current.last_updated)
  setLocation(response.data.location.name)
  setRegion(response.data.location.region)
  setTemp(response.data.current.temp_f)
  setIcon(response.data.current.condition.icon)
  setIconText(response.data.current.condition.text)
  setWind(response.data.current.wind_mph)
  //
  setWindDir(response.data.current.wind_dir)
  setWindGust(response.data.current.gust_mph)
}).catch(function (error) {
  console.error(error);
});

return (
<div className='h-screen flex flex-col h-screen bg-blue-300'>
  <div className='flex flex-row bg-blue-300 justify-center'>
    <div className='flex flex-col items-center'>
    {icon && <img src={icon} width={'120px'} height={'120px'} alt={iconText}></img>}
    {iconText && <p className='text-4xl'>{iconText}</p>}
    </div>
    <div className='flex flex-col h-40 justify-between items-center'>
    {location && <p className='text-5xl mt-12'>{location}, {region}</p>}
    {temp && <p className='text-4xl'>{temp}F</p>}
    </div>
  </div>
  <div>
    <div className='flex flex-col items-center w-1/2 m-auto mt-5'>
    {date && <p className='text-2xl'>Date: {date}</p>}
      {wind && <p className='text-2xl'>Wind: {wind}mph</p>}
      {windDir && <p className='text-2xl'>Direction: {windDir}</p>}
      {windGust && <p className='text-2xl'>Gust: {windGust}mph</p>}
    </div>
  </div>
</div>
)

}

