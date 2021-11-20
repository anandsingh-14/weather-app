import React from 'react';
import CurrentDayDescriptionItem from '../CurrentDayDescriptionItem';

const CurrentDayDescription = ({ data }) => (
    <div className="mt-4 mt-md-2">
        <div className="d-flex flex-column mb-2">
            {data.map(item => (
                <CurrentDayDescriptionItem {...item} key={item.name} />
            ))}
        </div>
    </div>
);


export default CurrentDayDescription;
