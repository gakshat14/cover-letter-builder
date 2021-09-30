import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './css/style.css'

ReactDOM.render(<App />, document.getElementById('root'))

if ((module as any).hot) {
    (module as any).hot.accept();
}
