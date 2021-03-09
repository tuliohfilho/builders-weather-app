import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../store'

import { Row, Col } from 'react-bootstrap'
import { Wind, Sun, CloudRainHeavyFill } from 'react-bootstrap-icons';

const WetherReport: React.FC = () => {

    const { weather, current } = useSelector((application: RootState) => application.weather)

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

export default WetherReport