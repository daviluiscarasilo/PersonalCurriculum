import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import './../css/SpinnerStyled.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const SpinnerStyled = () => {
    return (
        <>
            <Col className="offset-lg-5 offset-xs-5 SpinnerCol" lg={1} xs={1}>
                <Spinner
                    style={{
                        flex: 1,
                        marginTop: 240,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        position:'absolute'
                    }}
                    animation="border" size="sm" variant="info" className="spinnerStyle" />
            </Col>
        </>
    )
}

export default SpinnerStyled;