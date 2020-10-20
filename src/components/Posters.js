import React from 'react'
import SinglePost from './SinglePost'

export default function Posters({posters}) {
    return (
        <div style={{display:'grid',gridTemplateColumns:'33% 33% 33%'}}>

            {posters && posters.map((value,index)=>
                <SinglePost key={index} value={value}/>
            )}
            {/* {JSON.stringify(posters)} */}
        </div>
    )
} 
