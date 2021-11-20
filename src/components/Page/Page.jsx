import React, { Fragment, useEffect, useState } from 'react';

import Header from '../Header';
import Error from '../Error';
import Forecast from '../Forecast';
import styles from './Page.module.css';
import axios from 'axios';
import { getCurrentDayForecast, getDayTempRange, getDetailedForecast, getUpcomingDaysForecast } from '../../services/helperFunctions';
import { useDispatch } from 'react-redux'
import { addCurrentForecast } from '../../redux/actions/crrntForecastAction';
import { addForecastDetail } from '../../redux/actions/forecastDtlAction';
import { addWeeklyForecast } from '../../redux/actions/wklyForecastAction';
import { addTempDetail } from '../../redux/actions/tempRangeAction';
import { API_KEY, BASE_URL, LATITUDE, LONGITUDE } from '../../services/apiConstant';



const Page = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [error,setError] = useState("")
    const dispatch = useDispatch()
    const url = `${BASE_URL}?lat=${LATITUDE}&lon=${LONGITUDE}&units=metric&exclude=hourly&appid=${API_KEY}`
    const getForeCastData = async () => {
        try {
            const data = await axios(url)
            console.log(data, "data===")
            setError("")
            gatherForecastData(data.data)
        } catch (err) {
            setError("Something went wrong!")
        }

    }
    useEffect(() => {
        getForeCastData()
    }, [])

    const gatherForecastData = data => {
        const { current, daily } = data
        console.log(current, daily)
        const currentDay = getCurrentDayForecast(current);
        const currentDayDetails = getDetailedForecast(current);
        const upcomingDays = getUpcomingDaysForecast(daily);
        const dayTempRange = getDayTempRange(daily[0])
        dispatch(addCurrentForecast(currentDay));
        dispatch(addForecastDetail(currentDayDetails));
        dispatch(addWeeklyForecast(upcomingDays));
        dispatch(addTempDetail(dayTempRange));
        setIsLoaded(true)
    };
    return (
        <Fragment>
            <Header />
            {error && (
                <div className={`${styles.box} position-relative mt-4`}>
                    <Error message={error} />
                </div>
            )}
            {isLoaded && <Forecast/>}
        </Fragment>
    );
};

export default Page;
