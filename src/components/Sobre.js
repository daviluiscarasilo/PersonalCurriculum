import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SpinnerStyled from './SpinnerStyled'
import './../css/Sobre.css'
import FadeIn from 'react-fade-in';
import profileImage from './../media/profileImage.jpeg'
import { MdCloudDownload } from 'react-icons/md'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { useTranslation } from 'react-i18next';

var QRCode = require('qrcode.react');




const Sobre = () => {
    const { t } = useTranslation();
    const [carregando, setCarregando] = useState(true);

    return (
        <>
            <Row >
                {carregando &&
                    <SpinnerStyled />
                }

                <FadeIn
                    className="col-lg-12 col-12"
                    transitionDuration="3000"
                    onComplete={() => setCarregando}
                >
                    <Col className="offset-lg-2 MainContainerSobre" lg={8} xs={12} style={{}}>
                        <Row>
                            <Col lg={6} xs={12} style={{ paddingTop: 10, paddingBottom: 10, textAlign: "-webkit-center" }}>
                                <img className="profileImg" src={profileImage}></img>
                                <a href="https://drive.google.com/file/d/1f9iN0exARsS7_1yrCndmVOmIDsvcm76z/view?usp=sharing" target="_blank">
                                    <div  className="download-resume">
                                        <span  className="text-download"> <MdCloudDownload />   {t('DOWNLOAD_RESUME')}</span>
                                    </div>
                                </a>
                            </Col>

                            <Col lg={6} xs={12} style={{ paddingTop: 10, paddingBottom: 10 }}>
                                <Row>
                                    <div  className="info-profile">
                                        <h3>

                                            {t('HI_IAM')} <span>DAVI L. CARASILO</span>
                                        </h3>
                                        <h4>
                                            {t('ROLE_FOCUS')}
                                        </h4>
                                        <p>
                                            {t('ROLE_DESCRIPTION')}
                                        </p>
                                    </div>
                                </Row>

                            </Col>
                        </Row>
                        <Row style={{ color: "#848586", borderTopStyle: "solid" }}>
                            <Col lg={10} xs={12} style={{ paddingTop: 10, paddingBottom: 10 }}>
                                <ul  className="ul-info">
                                    <li  className="li-info">
                                        <span  className="title-info">  {t('AGE')}</span>
                                        <span  className="info">22</span>
                                    </li>
                                    <li  className="li-info">
                                        <span  className="title-info">{t('ADDRESS')}</span>
                                        <span  className="info">{t('ADDRESS_VALUE')}</span>
                                    </li>
                                    <li  className="li-info">
                                        <span  className="title-info">{t('EMAIL')}</span>
                                        <span  className="info">{t('EMAIL_VALUE')}</span>
                                    </li>
                                    <li  className="li-info">
                                        <span  className="title-info">{t('PHONE')}</span>
                                        <span  className="info">{t('PHONE_VALUE')}</span>
                                    </li>
                                    <li  className="li-info">
                                        <span  className="title-info">{t('NATIONALITY')}</span>
                                        <span  className="info">{t('NATIONALITY_VALUE')}</span>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={2} xs={12} style={{ paddingTop: 10, paddingBottom: 10, textAlign: "center" }}>
                                <Row>
                                    <Col lg={12} xs={12}>
                                        <span  className="text-download">{t('CHECK_RESUME')}</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12} xs={12}>
                                        <span>
                                            <QRCode className="align-middle" value="https://drive.google.com/file/d/1f9iN0exARsS7_1yrCndmVOmIDsvcm76z/view?usp=sharing" />
                                        </span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} xs={12} style={{ paddingTop: 10, paddingBottom: 10 }}>
                                <ul  className="ul-social-links">
                                    <li  className="li-social-links">
                                        <a  className="square" href="https://www.facebook.com/daviluis.carasilo" target="_blank">
                                            <RiFacebookBoxFill />
                                        </a>
                                    </li>
                                    <li  className="li-social-links">
                                        <a  className="square" href="https://www.linkedin.com/in/davi-luis-carasilo-934338171" target="_blank">
                                            <AiFillLinkedin />
                                        </a>
                                    </li>
                                    <li  className="li-social-links">
                                        <a  className="square" href="https://github.com/daviluiscarasilo" target="_blank">
                                            <AiOutlineGithub />
                                        </a>
                                    </li>

                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </FadeIn>

            </Row>
        </>
    )

}

export default Sobre