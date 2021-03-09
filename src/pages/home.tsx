import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { format } from 'date-fns'
import { Container, Row, Col } from 'react-bootstrap'
import { Wind, Sun, CloudRainHeavyFill, ArrowRepeat } from 'react-bootstrap-icons';

import { RootState } from '../store'
import { fetchWeather } from '../slices/weather/weather.thunks'
import { WeatherDay } from '../slices/weather/weather.interfaces'

import WetherAlert from './weather-alert'
import WetherReport from './weather-report'

const Home: React.FC = () => {

    const dispatch = useDispatch()

    const { weather, current, alerts, weatherDays } = useSelector((application: RootState) => application.weather)

    useEffect(() => {
        refreshWeatherReport();
    }, [])

    const refreshWeatherReport = () => {
        navigator.geolocation.getCurrentPosition((pos: any) => {
            const { latitude, longitude } = pos.coords;

            dispatch(fetchWeather({ lat: latitude, lon: longitude }))
        });
    }

    const renderTitle = () => {
        return (
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
        )
    }

    const getDate = (dt: Number): string => {
        const dtFull = dt as number * 1000;

        return format(new Date(dtFull), 'dd/MM');
    }

    const renderNextDays = () => {
        return (
            <>
                <Row className={'text-center'} style={{ marginTop: '25px', color: 'white' }}>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <p style={{ fontWeight: 'bold', fontSize: '1.5em' }}>PRÓXIMOS 5 DIAS</p>
                        <hr style={{ backgroundColor: 'white' }}></hr>
                    </Col>
                </Row>

                <Row className={'text-center'} >
                    <Col md={1}></Col>
                    {weatherDays.map((item: WeatherDay, index: Number) => {
                        if (index > 0 && index < 6)
                            return (
                                <Col md={2} className={'bkCard'} style={{ color: 'white', fontWeight: 'bold' }} key={item.dt.toString()}>
                                    <Row>
                                        <Col md={12} style={{ minHeight: '50px' }}>
                                            {getDate(item.dt)}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} style={{ minHeight: '80px' }}>
                                            {!item.rain && <Sun size={80} /> || <CloudRainHeavyFill size={80} />}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} style={{ minHeight: '50px', marginTop: '25px' }}>
                                            <p style={{ fontWeight: 'bold', fontSize: '1.5em' }}>{item.temp.day}ºC</p>
                                        </Col>
                                    </Row>
                                </Col>
                            )
                    })
                    }
                </Row>
            </>
        )
    }

    return (
        <Container>
            {renderTitle()}
            <WetherReport />
            <WetherAlert />
            {renderNextDays()}
        </Container >
    )
}

export default Home