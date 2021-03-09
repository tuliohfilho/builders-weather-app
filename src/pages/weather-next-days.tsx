import React from 'react'
import { useSelector } from 'react-redux'

import { Row, Col } from 'react-bootstrap'
import { Sun, CloudRainHeavyFill } from 'react-bootstrap-icons';

import { format } from 'date-fns'

import { RootState } from '../store'
import { WeatherDay } from '../slices/weather/weather.interfaces'

const WetherNextDays: React.FC = () => {

    const { weatherDays } = useSelector((application: RootState) => application.weather)

    const getDate = (dt: Number): string => {
        const dtFull = dt as number * 1000;

        return format(new Date(dtFull), 'dd/MM');
    }

    return (
        <>
            <Row className={'text-center'} style={{ marginTop: '25px', color: 'white' }}>
                <Col md={1}></Col>
                <Col md={10}>
                    <p style={{ fontWeight: 'bold', fontSize: '1.5em' }}>PRÓXIMOS 5 DIAS</p>
                    <hr style={{ backgroundColor: 'white' }}></hr>
                </Col>
            </Row>

            <Row className={'text-center'}>
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

export default WetherNextDays