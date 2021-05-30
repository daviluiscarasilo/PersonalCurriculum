import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

import { MdCollectionsBookmark } from 'react-icons/md'
import profileImage from './../media/android-chrome-512x512.svg'

const Rodape = () => {
    return (
<Navbar bg="dark" fixed="bottom" >
    <Navbar.Brand href="https://www.linkedin.com/in/davi-luis-carasilo-934338171" target="_blank" className="text-light">
        <MdCollectionsBookmark/> Developed by: Davi L. Carasilo
    </Navbar.Brand>
</Navbar>
    )
}

export default Rodape