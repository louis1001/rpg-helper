import React from "react"
import {Link} from 'gatsby'

export default function _404(props) {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1>Ups. Esta pagina no existe</h1>
            <p> <Link to="/">Volver al contenido</Link></p>
        </div>
    )
}