/**@jsx jsx */
import './App.css';
import ThemeProvider from './components/ThemeProvider';
import { jsx } from 'theme-ui';
import TimeEngine from './components/TimeEngine/component'
import WeatherEngine from './components/WeatherEngine/component'

function App() {
  return (
    <ThemeProvider>

      <TimeEngine location='Cairo,Egypt' />

    </ThemeProvider>
  );
}

export default App;
