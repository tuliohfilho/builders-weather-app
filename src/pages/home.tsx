import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../slices/weather/weather.thunks'
import { RootState } from '../store'
import { Container, Row, Col } from 'react-bootstrap'
import { format } from 'date-fns'
import { Wind, Sun, CloudRainHeavyFill, ArrowRepeat } from 'react-bootstrap-icons';
import { WeatherDay } from '../slices/weather/weather.interfaces'

const Home: React.FC = () => {

    const dispatch = useDispatch()

    //Estado do Reducer
    const { weather, current, alerts, weatherDays } = useSelector((application: RootState) => application.weather)

    console.log(weatherDays)

    useEffect(() => {
        //disparando action para  buscar weather
        dispatch(fetchWeather({ lat: -3.734408, lon: -38.597437 }))
    }, [])

    const refreshWeatherReport = () => {
        dispatch(fetchWeather({ lat: 1, lon: 2 }))
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

    const renderWeatherReport = () => {
        return (
            <Row style={{ color: 'white' }}>
                <Col md={1}></Col>
                <Col className={'text-center'} md={5}>
                    <Row>
                        <Col md={12}>
                            <p style={{ fontWeight: 'bold', fontSize: '1.5em' }}>LOCAL WEATHER REPORT</p>
                            <hr style={{ backgroundColor: 'white' }}></hr>
                        </Col>
                    </Row>
                    <Row className='align-items-center' style={{ minHeight: '150px' }}>
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
            {renderWeatherReport()}
            {renderAlert()}
            {renderNextDays()}
        </Container >
    )
}

export default Home