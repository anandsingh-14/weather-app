import React, { useState } from 'react';
import CurrentDayDescription from '../CurrentDayDescription';
import { useSelector } from 'react-redux';

function CurrentDayDetails() {
    const [show, setShow] = useState(false)
    const { crrntForecastDtl } = useSelector(state => state?.forecastDetail)

    const showMore = () => {
        setShow(!show)
    }
    return (
        <div className="flex-column">
            <button type="button" className="btn btn-light" onClick={showMore}>Show More</button>
            {show && <CurrentDayDescription data={crrntForecastDtl} />}
        </div>
    )
}

export default CurrentDayDetails
