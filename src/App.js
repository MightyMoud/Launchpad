/**@jsx jsx */
import './App.css';
import ThemeProvider from './components/ThemeProvider';
import { jsx } from 'theme-ui';
import CityField from './components/CityField/component';
import WeatherCard from './components/WeatherCard/component';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1 sx={{ variant: 'text.heading', fontSize: '6' }} >Hello World!</h1>
        <WeatherCard
          temp={6}
          minTemp={3.86}
          maxTemp={12.65}
          city={'Melbourne'}
          country={'Au'}
          main='Clouds'></WeatherCard>
      </div>
    </ThemeProvider>
  );
}

export default App;
