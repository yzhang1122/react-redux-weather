import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'
import testReducer from './reducer_test'

const rootReducer = combineReducers({
    weather: WeatherReducer,
    test: testReducer
});

export default rootReducer;
