import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../slices/weather/weather.thunks'
import { RootState } from '../store'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Wind, Sun } from 'react-bootstrap-icons';

const Home: React.FC = () => {

    const dispatch = useDispatch()

    //Estado do Reducer
    const { weather, current } = useSelector((application: RootState) => application.weather)

    useEffect(() => {
        //disparando action para  buscar weather
        dispatch(fetchWeather({ lat: -3.734408, lon: -38.597437 }))
    }, [])

    console.log(current);
    return (
        <Container>
            <Row className={'text-center'} style={{ marginTop: '15px', color: 'white' }}>
                <Col md={12}>
                    <p style={{ fontWeight: 'bold', fontSize: '2.5em' }}>BUILDERS WEATHER TESTE</p>
                </Col>
            </Row>
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
                            <Sun size={150} />
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
        </Container >
    )
}

export default Home