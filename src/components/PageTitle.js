import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';


export default function PageTitle({title, color, bgColor, maj}) {
    //const { title } = props
    return (
        <div style={{display:'flex',backgroundColor:"#191919"}}>
        <h1 style={{paddingLeft: 20, color:color,
             backgroundColor: bgColor || "blue"}}
            className={maj ? "maj" : undefined}>
         {title}
        </h1>
        <ul style={{display:'flex', listStyle: 'none',
    margin: '2rem', marginLeft: '27rem'}}>
            <li style={{marginLeft:"3rem",margin:'20px',marginTop:'10px'}}>Acceuil</li>
            <li>Contact</li>
            <li>Sign-out</li>
        </ul>
        </div>
        
    )
}

