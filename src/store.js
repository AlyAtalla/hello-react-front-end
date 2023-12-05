import { createStore } from 'redux';
import { greetingReducer } from './reducer';

export const store = createStore(greetingReducer);
