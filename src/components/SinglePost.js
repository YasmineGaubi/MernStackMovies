import React from 'react'

export default function SinglePost({value}) {
    return (
        <div style={{margin: '10px'}}>
            <h3> {value.Title} </h3> 
            <img style={{height:'54vh'}} src={value.Poster}/>
        </div>
    )
}
