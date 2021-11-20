import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const tooltipData = payload[0].payload
    return (
      <div className="custom-tooltip">
        <p className="label">{`Day     : ${tooltipData.weekday}`}</p>
        <p className="intro">{`minTemp : ${tooltipData.minTemp}°C`}</p>
        <p className="intro">{`maxTemp : ${tooltipData.maxTemp}°C`}</p>
        <p className="desc">{tooltipData.weatherDescription}</p>
      </div>
    );
  }

  return null;
};


const WeeklyChart = () => {
  const { upcomingForecast } = useSelector(state => state?.weeklyForecast)
  
  return (
    <div className="mt-3">
      <ResponsiveContainer width="95%" height={240}>
      <LineChart
        data={upcomingForecast}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="weekday" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone"  dataKey="maxTemp" stroke="#8884d8" activeDot={{ r: 8 }}  />
        <Line type="monotone" dataKey="minTemp" stroke="#82ca9d" />
      </LineChart>
      </ResponsiveContainer>
     </div>


  );
}

export default WeeklyChart
