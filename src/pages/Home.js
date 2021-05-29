import React, { useEffect, useState } from 'react'
import './../css/Layout.css'
import Sobre from '../components/Sobre'
import Rodape from '../components/Rodape'



var QRCode = require('qrcode.react');


const Home = () => {
    return (
        <>
            <Sobre />
            <Rodape/>
        </>
    )
}

export default Home