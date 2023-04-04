import { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherResults from './components/WeatherResults';

function App() {
  const [results, setResults] = useState({});

  console.log(results);

  return (
    <div className='App'>
      <div className='container'>
        {Object.keys(results).length > 0 ? (
          <WeatherResults data={results} clearFill={() => setResults({})} />
        ) : (
          <WeatherForm fillResults={(data) => setResults(data)} />
        )}
      </div>
    </div>
  );
}

export default App;
