import React, { useEffect, useState } from "react";
import KimQuotedashian from "../components/KimQuotedashian";
import LoadingScreen from "../components/LoadingScreen";
import { getKanyefied, getQuote } from "../api/api";
import HandlerButton from '../components/HandlerButton';
import ShareTheWisdom from "../components/ShareTheWisdom";
import { Button } from 'antd';

const Home = () => {
  const [quote, setQuote] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [yeColor, setYeColor] = useState('');
  const [yeetUser, setYeetUser] = useState('');
  const [shareWindowVisible, setShareWindowVisible] = useState(false);
  const [showWisdom, setShowWisdom] = useState(false);

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


  if(shareWindowVisible) 
  return (
    <div style={{width : '100%', height : '100%', background : 'black'}}>
    <ShareTheWisdom showWisdom={showWisdom} shareWindowVisible={shareWindowVisible}  setShowWisdom={(bool) => setShowWisdom(bool)}  imageUrl={imageUrl} quote={quote} setShareWindowVisible={(bool) => setShareWindowVisible(bool)}/>
    </div>
  )
  return (
    <div
    >
      <Button onClick={() => setShareWindowVisible(true)} style={{ zIndex: 100, textAlign: 'right', float: 'right' }}>Share the wisdom</Button>
      <img src={imageUrl} onLoad={() => setLoading(false)} style={{
        position: 'fixed', top: "0",
        left: "0", width: '100%', height: '100%', top: '0', left: '0', zIndex: '-1'
      }} />
      {loading ? <LoadingScreen /> :
        <div
        id="dom"
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          background: 'linear-gradient( rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6))',
          zIndex: 1,
          top: 0,
          left: 0,
          textAlign: 'center'
        }}
      >
        <KimQuotedashian quote={quote} color={yeColor} />
        <HandlerButton onClick={handleKanye} />
        <p style={{ fontStyle: 'italic', color: 'white', bottom: 0, textAlign: 'center' }}>credits Unsplash by {yeetUser}</p>
      </div>
      }
   
    </div>
  );
};

export default Home;
