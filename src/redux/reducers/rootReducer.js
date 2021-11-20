import {combineReducers} from 'redux';
import { crrntForecastReducer } from './crrntForecastReducer';
import { forecastDtlReducer } from './forecastDtlReducer';
import { tempRangeReducer } from './tempRangeReducer';
import { wklyForecastReducer } from './wklyForecastReducer';

const rootReducer = combineReducers({
    currentForecast: crrntForecastReducer ,
    forecastDetail: forecastDtlReducer,
    weeklyForecast: wklyForecastReducer,
    tempRange:tempRangeReducer

  });

export default rootReducer