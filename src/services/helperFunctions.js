import moment from 'moment';

export const getCurrentDayForecast = (data) => ({
    weekday: moment.unix(data.dt).format('dddd'),
    date: moment.unix(data.dt).format('MMMM Do'),
    temperature: Math.round(data.temp),
    weatherDescription: data.weather[0].description,
});

export const getDetailedForecast = data => ([
    
    {
        name: 'humidity',
        value: data.humidity,
        unit: '%',
    },
    {
        name: 'wind',
        value: Math.round(data.wind_speed),
        unit: 'm/sec',
    },
    {
        name: 'air pressure',
        value: data.pressure,
        unit: 'mb',
    },
    {
        name: 'sunrise',
        value: moment.unix(data.sunrise).format('h:mm'),
        unit: 'am',
    },
    {
        name: 'sunset',
        value: moment.unix(data.sunset).format('h:mm'),
        unit: 'pm',
    },
   
]);

const getWeekday = date => moment.unix(date).format('dddd').substring(0, 3);

export const getUpcomingDaysForecast = data =>
    data.map(day => ({
        maxTemp: Math.round(day.temp.max),
        minTemp: Math.round(day.temp.min),
        weekday: getWeekday(day.dt),
        weatherDescription: day.weather[0].description,
        date: moment.unix(day.dt).format('MMMM Do'),

    }));

export const getDayTempRange = (data)=>([
    {
        name: 'max temp',
        value: Math.round(data.temp.max),
        unit: '°C',
    },
    {
        name: 'min temp',
        value: Math.round(data.temp.min),
        unit: '°C',
    },
])