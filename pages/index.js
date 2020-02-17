import React, { useEffect, useState } from "react";
import KimQuotedashian from "../components/KimQuotedashian";
import LoadingScreen from "../components/LoadingScreen";
import { getKanyefied, getQuote } from "../api/api";
import HandlerButton from '../components/HandlerButton';

const Home = () => {
  const [quote, setQuote] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [yeColor, setYeColor] = useState('');
  const [yeetUser, setYeetUser] = useState('');


  const handleKanye = () => {
    setLoading(true);
    getQuote().then(kanyeQuote => {
      setQuote(kanyeQuote);
      getKanyefied(kanyeQuote).then(kanyeObject => {
        setImageUrl(kanyeObject.url);
        setYeColor(kanyeObject.color);
        setYeetUser(kanyeObject.user)
      });
    });
  };

  useEffect(() => {
    handleKanye();
  }, []);

  return (
    <div
    >

      <img src={imageUrl} onLoad={() => setLoading(false)} style={{
        position: 'fixed', top: "0",
        left: "0", width: '100%', height: '100%', top: '0', left: '0', zIndex: '-1'
      }} />
      {loading ?
         <LoadingScreen />  :
         <div

        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          background: 'linear-gradient( rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6))',
          zIndex:1,
          top:0,
          left:0,
          textAlign:'center'
        }}
      >
      <KimQuotedashian quote={quote} color={yeColor} />
      <HandlerButton onClick={handleKanye} />
      </div>

        }

    </div>
  );
};

export default Home;
