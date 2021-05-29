import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

import { MdCollectionsBookmark } from 'react-icons/md'

const Rodape = () => {
    return (
<Navbar bg="dark" fixed="bottom" >
    <Navbar.Brand href="https://www.linkedin.com/in/davi-luis-carasilo-934338171" target="_blank" className="text-light">
        <MdCollectionsBookmark/> Developed by: Davi L. Carasilo - Back-End  software engineer
    </Navbar.Brand>
</Navbar>
    )
}

export default Rodape