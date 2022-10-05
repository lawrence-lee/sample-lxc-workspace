import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class WebComponent extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />,this);
  }
}

const ELEMENT_ID = 'mycustomelem-element';

if (!customElements.get(ELEMENT_ID)) {
  customElements.define(ELEMENT_ID, WebComponent);
}

