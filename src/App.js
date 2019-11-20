/**@jsx jsx */
import './App.css';
import ThemeProvider from './components/ThemeProvider';
import { jsx } from 'theme-ui';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1 sx={{ variant: 'text.heading' }} >Hello World!</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
