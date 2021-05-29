import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SpinnerStyled from './SpinnerStyled'
import './../css/Sobre.css'
import FadeIn from 'react-fade-in';
import profileImage from './../media/profileImage.jpeg'
import { MdCloudDownload } from 'react-icons/md'

const Sobre = () => {
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
                    <Col className="offset-lg-2 offset-xs-2 MainContainerSobre" lg={8} xs={8} style={{}}>
                        <Row>
                            <Col lg={6} xs={6} style={{ paddingTop: 10, paddingBottom: 10, textAlign: "-webkit-center" }}>
                                <img className="profileImg" src={profileImage}></img>
                                <a href="https://drive.google.com/file/d/1f9iN0exARsS7_1yrCndmVOmIDsvcm76z/view?usp=sharing" target="_blank">
                                    <div class="download-resume">
                                        <span class="text-download"> <MdCloudDownload /> DOWNLOAD RESUME</span>
                                    </div>
                                </a>
                            </Col>

                            <Col lg={6} xs={6} style={{ paddingTop: 10, paddingBottom: 10 }}>
                                <div class="info-profile">
                                    <h3>
                                        HI I'M <span>DAVI L. CARASILO</span>
                                    </h3>
                                    <h4>
                                        software engineer focusing on microsoft .NET
                                    </h4>
                                    <p>
                                    I work for almost 6 years in the IT area, starting my career as a trainee, then I became an intern, and finally, developer, software engineer, and now as Tech Lead, always keeping a good job and focusing on quality, performance, execution, good practices, and delivery capacity.
I already worked on multiple projects, like Ponto Certificado, EZHeadOffice (Website for report generating, manager monitoring of the process), Bradesco software for consortium transfer, and many others, more recently, i'm working in a new group of APIs in the fuel pump control area, implementing some architectures for the project, and following side by side the engineering and IT department.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </FadeIn>

            </Row>
        </>
    )

}

export default Sobre