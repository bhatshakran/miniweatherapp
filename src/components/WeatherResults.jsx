import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { BsThermometerSun } from 'react-icons/bs';
import { IoIosWater } from 'react-icons/io';

const WeatherResults = ({ data, clearFill }) => {
  return (
    <div className='card'>
      <div className='card_inner'>
        <div className='card_heading'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span
              className=''
              role='button'
              style={{ cursor: 'pointer' }}
              onClick={clearFill}
            >
              <IoMdArrowBack style={{ color: 'gray', fontSize: '1.5rem' }} />
            </span>
            <h2>Weather App</h2>
          </div>
        </div>

        <div className='card_content'>
          <div className='results_card_content'>
            {/* img based on the weather */}
            <div className='weather_icon'>
              <img
                src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt=''
              />
            </div>
            <div className='card_content_inner'>
              <h2 style={{ fontSize: '2rem' }}>
                {(data.main.temp - 273.15).toFixed(2)}
                <sup>&#xb0;</sup>C
              </h2>
              <h3 className='card_content_text'>
                {data.weather[0].description.charAt(0).toUpperCase() +
                  data.weather[0].description.slice(1)}
              </h3>
              <h5 className='card_content_text'>
                {data.name},{data.sys.country}
              </h5>
            </div>
          </div>
        </div>

        <div className='card_extra'>
          <div className='card_extra_item'>
            <BsThermometerSun style={{ color: '#43aefc' }} />
            <h6 className='card_extra_text'>
              <span>
                {(data.main.feels_like - 273.15).toFixed(2)}
                <sup>&#xb0;</sup>C
              </span>

              <span style={{ fontSize: '8px' }}>Feels like</span>
            </h6>
          </div>
          <div className='card_extra_item'>
            <IoIosWater style={{ color: '#43aefc' }} />
            <h6 className='card_extra_text'>
              {data.main.humidity}%
              <span style={{ fontSize: '8px' }}>Humidity</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherResults;
