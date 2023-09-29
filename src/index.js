import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Button from './EventHandling/ButtonTest';
import Toolbar from './EventHandling/ButtonWithProps';
import Toolbar2 from './EventHandling/ButtonWithProps2';
import Test from './EventHandling/NamingEventHandler';
import EventPropragation from './EventHandling/EventPropagation';
import StoppingEventPropagation from './EventHandling/StoppingEventPropagation';
import Signup from './EventHandling/PreventDefault';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Button />
    <Toolbar />
    <Toolbar2 />
    <Test />
    <EventPropragation />
    <StoppingEventPropagation />
    <Signup />
  </React.StrictMode>
);


reportWebVitals();
