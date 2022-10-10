import React from 'react'

import '../assets/styles/bordered-container.css'

export default function BorderedContainer({children, title}) {
    return (
        <div className="bordered-container">
            <h2>{title}</h2>
            {children}
        </div>
    )
}