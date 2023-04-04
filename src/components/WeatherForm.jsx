import React, { useState } from 'react';
import { networkCall } from '../lib/networkCall';

const APIURL = `https://api.openweathermap.org/data/2.5/weather?`;
const APIKEY = '086ac2f646fa018085da4c3f12ea3690';

const WeatherForm = ({ fillResults }) => {
  const [cityTerm, setCityTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState('');

  const getCityWeather = async (e, coords) => {
    let res;

    try {
      if (!loading) setLoading(true);
      if (coords) {
        res = await networkCall(
          `${APIURL}lat=${coords.lat}&lon=${coords.lon}&APPID=${APIKEY}`
        );
      } else {
        res = await networkCall(`${APIURL}q=${cityTerm}&APPID=${APIKEY}`);
      }
      fillResults(res);
    } catch (error) {
      setLoading(false);
      setErrors('Network Error. Maybe check the city name');
    }
  };

  const getLocationAndWeather = () => {
    if (navigator.geolocation) {
      const pos = navigator.geolocation.getCurrentPosition(showPosition);
    }
  };

  function showPosition(position) {
    setLoading(true);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // setCoords({ lat, lon });

    getCityWeather('', { lat, lon });
  }

  return (
    <div className='card'>
      <div className='card_inner'>
        <div className='card_heading'>
          <h2>Weather App</h2>
        </div>

        <div className='card_content'>
          {loading ? (
            <div>Loading ...</div>
          ) : (
            <>
              {' '}
              <div className='input_group'>
                <input
                  type='text'
                  value={cityTerm}
                  onChange={(e) => setCityTerm(e.target.value)}
                  placeholder='Enter city name'
                  className='cityInput'
                />
                <button onClick={getCityWeather}>Go</button>
                <span style={{ fontSize: '12px', color: 'red' }}>
                  {errors.length > 0 && errors}
                </span>
              </div>
              <span style={{ width: '100%', position: 'relative' }}>
                <span className='line'>
                  <span className='lineTxt'>or</span>
                </span>
              </span>
              <button
                type='button'
                onClick={getLocationAndWeather}
                className='locButton'
              >
                Get Device Location
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherForm;
