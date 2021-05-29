import React, { useEffect, useState } from 'react'
import './../css/Layout.css'
import Sobre from '../components/Sobre'
import Rodape from '../components/Rodape'
import Cabecalho from '../components/Cabecalho'



var QRCode = require('qrcode.react');


const Home = () => {
    return (
        <>
            <Cabecalho />
            <Sobre />
            <Rodape />
        </>
    )
}

export default Home