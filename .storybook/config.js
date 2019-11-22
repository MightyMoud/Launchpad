import { configure } from '@storybook/react';
import '../src/App.css';
import '../src/index.css';
import "typeface-merriweather";
import "typeface-fira-sans";

const req = require.context('../src', true, /\.stories.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);