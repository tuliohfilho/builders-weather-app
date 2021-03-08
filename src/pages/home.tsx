import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../slices/weather/weather.thunks'
import { RootState } from '../store'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Home: React.FC = () => {

    const dispatch = useDispatch()

    //Estado do Reducer
    const weather = useSelector((application: RootState) => application.weather)

    useEffect(() => {
        //disparando action para  buscar weather
        dispatch(fetchWeather({ lat: 1, lon: 2 }))
    }, [])

    return (
        <Container>
            <Row className={'text-center'} style={{ marginTop: '15px' }}>
                <Col md={12} style={{ color: 'white', fontWeight: 'bold' }}>
                    <h1>BUILDERS WEATHER TESTE</h1>
                </Col>
            </Row>
            <Row className={'text-center'} style={{ marginTop: '15px', }}>
                <Col md={5}>
                    <Col className={'bkCard'} md={12} style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5em' }}>
                        <p style={{ borderBottom: 'solid 2px white', paddingBottom: '10px' }}>LOCAL WEATHER REPORT</p>
                        <p style={{ minHeight: '250px' }}>CONTEUDO</p>
                    </Col>
                </Col>
                <Col md={7}>
                    <Col className={'bkCard'} md={12} style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5em' }}>
                        <p style={{ borderBottom: 'solid 2px white', paddingBottom: '10px' }}>DETALHES WEATHER REPORT</p>
                        <p style={{ minHeight: '250px' }}>CONTEUDO</p>
                    </Col>
                </Col>
            </Row>
            <Row className={'text-center'} style={{ marginTop: '20px' }}>
                <Col md={1}>
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
                <Col md={2} style={{ color: 'white', fontWeight: 'bold' }}>
                    <p className={'bkCard'} style={{ minHeight: '250px' }}>SEGUNDA</p>
                </Col>
            </Row>
        </Container >
    )
}

export default Home