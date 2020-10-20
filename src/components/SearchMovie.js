import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios'
import Posters from './Posters'
import SearchIcon from '@material-ui/icons/Search';


const API_KEY= 'fcc476f5'


export default function SearchMovie(props) {

        const [searchTerm, setSearchTerm] = useState("");
        const [results, setResults] = useState([])

        const API_ENDPOINT=`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}` 


        const handleSearchChange = event => {
          setSearchTerm(event.target.value);
          // if (searchTerm.length>4) {
            
          //   axios.get(API_ENDPOINT)
          //   .then((response) => setResults(response.data.Search))
          // }

        } // function t3ayet lfunction

        const handleSearchSubmit = event => {
          event.preventDefault();
          axios.get(API_ENDPOINT)
          .then((response) => setResults(response.data.Search))   //console.log("You searched for ",searchTerm);
        };
          
        return (
            <div style={{marginLeft: 'auto', marginTop: 'auto',display: 'grid',justifyContent: 'center'}}>
            <h2>{props.title}</h2>

        <div className="header">
           <form onSubmit={handleSearchSubmit}>
            <input
             type="text"
             onChange={handleSearchChange}
             value={<SearchIcon/>,searchTerm}
             />
             <button style={{display:'none'}} type="Submit">Search</button>
           </form>
        </div>
            <h3>You are searching for: </h3>
            <p>{searchTerm}</p>
            {/* <p>{JSON.stringify(results)}</p> */}



            <Posters posters={results}/>
            
            <h2>Number of views: {props.numberOfViews} </h2>
            {/* <MoviesSearchList/> */}
          </div>
        )
    }



