/**@jsx jsx */
import './App.css';
import ThemeProvider from './components/ThemeProvider';
import { jsx } from 'theme-ui';
import NewsCard from './components/NewsCard/component'
import NewsEngine from './components/NewsEngine/component';

function App() {
  return (
    <ThemeProvider>

      <NewsEngine></NewsEngine>

    </ThemeProvider>
  );
}

export default App;
