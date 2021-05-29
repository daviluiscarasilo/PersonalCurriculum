import React, { useEffect, useState } from 'react'

import profileImage from './../media/profileImage.jpeg'
import en from './../media/en.png'
import pt from './../media/pt-br.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useTranslation,withTranslation  } from 'react-i18next';


const Cabecalho = () => {
  const { i18n, t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState('en');


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setSelectedLang(language);
  }


  return (
    <>
      <Row>
        <Col xs={12} ls={12} style={{ textAlign: "end",color:"white" }}>
          {selectedLang === 'en' &&
            <img src={en} onClick={() => changeLanguage('en')} className="languageActive" style={{cursor:"pointer"}}></img>
          }
          {selectedLang === 'en' &&
            <img src={pt} onClick={() => changeLanguage('pt')} style={{cursor:"pointer"}}></img>
          }

          {selectedLang === 'pt' &&
            <img src={en} onClick={() => changeLanguage('en')} style={{cursor:"pointer"}}></img>
          }
          {selectedLang === 'pt' &&
            <img src={pt} onClick={() => changeLanguage('pt')} className="languageActive" style={{cursor:"pointer"}}></img>
          }


        </Col>

      </Row>


    </>

  )
}

export default Cabecalho