import React, { useState, useEffect } from 'react';
import './App.css';
import SearchMovie from './components/SearchMovie';
import PageTitle from './components/PageTitle';



export default function App(){  
  const [ numberOfViews, setNumberOfViews ] = useState(14)

  return (
    
      <React.Fragment>

      <PageTitle title="Home page" color="#ffd1ff" bgColor='black ' maj/>
      <SearchMovie 
       title="Search for a movie"
       //numberOfViews={14}
       description="you can search for any type of movie"
      />
      
      
      </React.Fragment>

  )
}