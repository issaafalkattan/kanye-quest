import React, { useEffect, useState } from "react";
import KimQuotedashian from "../components/KimQuotedashian";
import ImageGenerator from "../components/ImageGenerator";
import LoadingScreen from "../components/LoadingScreen";
import { getImageUrl, getQuote } from "../api";

const Home = () => {
  const [quote, setQuote] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [loading, setLoading] = useState(false);

  const handleKanye = () => {
    setLoading(true);
    getQuote().then(kanyeQuote => {
      setQuote(kanyeQuote);
      getImageUrl(kanyeQuote).then(kanyeImageUrl => {
        setImageUrl(kanyeImageUrl);
      });
    });
  };

  useEffect(() => {
    handleKanye();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(${imageUrl})`,
        backgroundSize: "cover"
      }}
    >
      <img src={imageUrl} onLoad={() => setLoading(false)} style={{visibility: 'hidden', position: 'fixed'}}/>
      {loading && <LoadingScreen />}
      <div>
        <KimQuotedashian quote={quote} />
        <button onClick={handleKanye}>Handle</button>
      </div>
    </div>
  );
};

export default Home;
