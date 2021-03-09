import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { ArrowRepeat } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap'

import { fetchWeather } from '../slices/weather/weather.thunks'

import WetherAlert from './weather-alert'
import WetherReport from './weather-report'
import WetherNextDays from './weather-next-days'

const Home: React.FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        refreshWeatherReport();
    }, [])

    const refreshWeatherReport = () => {
        navigator.geolocation.getCurrentPosition((pos: any) => {
            const { latitude, longitude } = pos.coords;

            dispatch(fetchWeather({ lat: latitude, lon: longitude }))
        });
    }

    return (
        <Container>
            <Row className={'text-center'} style={{ color: 'white', fontWeight: 'bold', fontSize: '2.5em' }}>
                <Col md={1}></Col>
                <Col md={9}>
                    <p>
                        BUILDERS WEATHER TESTE
                    </p>
                </Col>
                <Col md={1} onClick={refreshWeatherReport}>
                    <p style={{ cursor: 'pointer' }}>
                        <ArrowRepeat />
                    </p>
                </Col>
            </Row>
            <WetherReport />
            <WetherAlert />
            <WetherNextDays />
        </Container>
    )
}

export default Home