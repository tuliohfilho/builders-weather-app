import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../store'

import { Row, Col } from 'react-bootstrap'

const WetherAlert: React.FC = () => {

    const { alerts } = useSelector((application: RootState) => application.weather)

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
    else
        return (
            <></>
        )
}

export default WetherAlert