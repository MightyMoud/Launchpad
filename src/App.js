/**@jsx jsx */
import './App.css';
import ThemeProvider from './components/ThemeProvider';
import { jsx } from 'theme-ui';

import SideNav from './components/SideNav/component'

function App() {
  return (
    <ThemeProvider>

      <SideNav></SideNav>

    </ThemeProvider>
  );
}

export default App;
