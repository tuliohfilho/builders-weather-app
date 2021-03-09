import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../slices/weather/weather.thunks'
import { RootState } from '../store'
import { Container, Row, Col } from 'react-bootstrap'
import { Wind, Sun, CloudRainHeavyFill, ArrowRepeat } from 'react-bootstrap-icons';

const Home: React.FC = () => {

    const dispatch = useDispatch()

    //Estado do Reducer
    const { weather, current, alerts } = useSelector((application: RootState) => application.weather)

    useEffect(() => {
        //disparando action para  buscar weather
        // dispatch(fetchWeather({ lat: 1, lon: 2 }))
        dispatch(fetchWeather({ lat: -3.734408, lon: -38.597437 }))
    }, [])

    const refreshWeatherReport = () => {
        dispatch(fetchWeather({ lat: 1, lon: 2 }))
    }

    const renderTitle = () => {
        return (
            <Row className={'text-center'} style={{ marginTop: '15px', color: 'white' }}>
                <Col md={1}></Col>
                <Col md={9}>
                    <p style={{ fontWeight: 'bold', fontSize: '2.5em' }}>
                        BUILDERS WEATHER TESTE
                    </p>
                </Col>
                <Col md={1} onClick={refreshWeatherReport}>
                    <p style={{ fontWeight: 'bold', fontSize: '2.5em', cursor: 'pointer' }}>
                        <ArrowRepeat />
                    </p>
                </Col>
            </Row>
        )
    }

    const renderWeatherReport = () => {
        return (
            <Row style={{ marginTop: '15px', color: 'white' }}>
                <Col md={1}></Col>
                <Col className={'text-center'} md={5}>
                    <Row>
                        <Col md={12}>
                            <p style={{ fontWeight: 'bold', fontSize: '1.5em' }}>LOCAL WEATHER REPORT</p>
                            <hr style={{ backgroundColor: 'white' }}></hr>
                        </Col>
                    </Row>
                    <Row className='align-items-center' style={{ minHeight: '150px', paddingTop: '15px' }}>
                        <Col md={6}>
                            {!current.rain && <Sun size={150} /> || <CloudRainHeavyFill size={150} />}
                        </Col>
                        <Col md={6}>
                            <p style={{ fontWeight: 'bold', fontSize: '2em' }}>{current.temp}ºC</p>
                            <p><Wind /> {current.wind_speed} KM/H</p>
                        </Col>
                    </Row>
                </Col>

                <Col md={5}>
                    <Row>
                        <Col className={'text-center'} md={12}>
                            <p style={{ fontWeight: 'bold', fontSize: '1.5em' }}>DETALHES WEATHER REPORT</p>
                            <hr style={{ backgroundColor: 'white' }}></hr>
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: '20px' }}>
                        <Col md={6}><b>LATITUDE:</b></Col>
                        <Col md={5} className='text-right'>{weather.lat}</Col>
                        <Col md={6}><b>LONGITUDE:</b></Col>
                        <Col md={5} className='text-right'>{weather.lon}</Col>
                        <Col md={6}><b>TIME ZONE:</b></Col>
                        <Col md={5} className='text-right'>{weather.timezone}</Col>
                        <Col md={6}><b>UMIDADE:</b></Col>
                        <Col md={5} className='text-right'>{current.humidity}%</Col>
                        <Col md={6}><b>SENSAÇÃO TERMICA:</b></Col>
                        <Col md={5} className='text-right'>{current.feels_like}ºC</Col>
                    </Row>
                </Col>
            </Row>
        )
    }

    const renderAlert = () => {
        if (alerts && alerts.length)
            return (
                <Row style={{ marginTop: '25px', color: 'white' }}>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <p>Alerta: {alerts[0].event}</p>
                        <p>{alerts[0].description}</p>
                    </Col>
                </Row>
            )
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
                <Row className={'text-center'} style={{ marginTop: '20px' }}>
                    <Col md={1}></Col>
                    <Col md={2} style={{ color: 'white', fontWeight: 'bold' }}>
                        <p className={'bkCard'} style={{ minHeight: '250px' }}>SEGUNDA</p>
                    </Col>
                    <Col md={2} style={{ color: 'white', fontWeight: 'bold' }}>
                        <p className={'bkCard'} style={{ minHeight: '250px' }}>SEGUNDA</p>
                    </Col>
                    <Col md={2} style={{ color: 'white', fontWeight: 'bold' }}>
                        <p className={'bkCard'} style={{ minHeight: '250px' }}>SEGUNDA</p>
                    </Col>
                    <Col md={2} style={{ color: 'white', fontWeight: 'bold' }}>
                        <p className={'bkCard'} style={{ minHeight: '250px' }}>SEGUNDA</p>
                    </Col>
                    <Col md={2} style={{ color: 'white', fontWeight: 'bold' }}>
                        <p className={'bkCard'} style={{ minHeight: '250px' }}>SEGUNDA</p>
                    </Col>
                </Row>
            </>
        )
    }

    return (
        <Container>
            {renderTitle()}
            {renderWeatherReport()}
            {renderAlert()}
            {renderNextDays()}
        </Container >
    )
}

export default Home