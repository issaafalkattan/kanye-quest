import React, { useEffect, useState } from 'react';
import KimQuotedashian from '../components/KimQuotedashian'
import ImageGenerator from '../components/ImageGenerator'
import LoadingScreen from '../components/LoadingScreen'
import {getImageUrl, getQuote} from '../api';

const Home = () => {
  const [quote, setQuote] = useState();
  const [imageUrl, setImageUrl] = useState();


  const handleKanye = () => {
    getQuote().then(kanyeQuote => {setQuote(kanyeQuote);
      getImageUrl(kanyeQuote).then(kanyeImageUrl => setImageUrl(kanyeImageUrl));

    
    });

  }

  useEffect(() => {
    handleKanye()
  }, [])

  return (

  <div> 
  {quote && imageUrl ?
    <div>

    <KimQuotedashian setQuote={setQuote} quote={quote}/>
    <ImageGenerator imageUrl={imageUrl} setImageUrl={setImageUrl} />


  </div>: <LoadingScreen />}
  <button onClick={handleKanye} >Handle</button>
  </div>
  )
}
 


export default Home;
