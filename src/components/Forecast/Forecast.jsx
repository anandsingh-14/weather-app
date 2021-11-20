import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import CurrentDay from '../CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription';
import { useSelector } from 'react-redux';

import styles from './Forecast.module.css';
import CurrentDayDetails from '../CurrentDayDetails/CurrentDayDetails';
import WeeklyChart from '../WeeklyForecast/WeeklyChart';

const Forecast = () => {
    const { temp } = useSelector(state => state?.tempRange)
    return (
        <Container className={styles.box}>
            <Row>
                <Col xs={12} md={4}>
                    <div className={styles.card}>
                        <CurrentDay />
                    </div>
                </Col>
                <Col xs={12} md={8} className="d-flex flex-column ">
                    <CurrentDayDescription data={temp} />
                    <CurrentDayDetails />
                </Col>
            </Row>
            <WeeklyChart />
        </Container>
    )
}


export default Forecast;
