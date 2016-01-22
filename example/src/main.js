import { run } from '@cycle/core';
import { makeDOMDriver } from '@cycle/dom';
import App from './app';

run(App, {
  DOM: makeDOMDriver('.app')
});
