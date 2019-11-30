/**@jsx jsx */
import './App.css';
import ThemeProvider from './components/ThemeProvider';
import { jsx } from 'theme-ui';
import NewsCard from './components/NewsCard/component'

function App() {
  return (
    <ThemeProvider>

      <NewsCard location='Cairo,Egypt' />

    </ThemeProvider>
  );
}

export default App;
