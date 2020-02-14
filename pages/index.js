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
    <div>
      {loading && <LoadingScreen />}
      <div>
        <KimQuotedashian quote={quote} />
        <img
          onLoad={() => setLoading(false)}
          src={imageUrl}
          style={{
            position: "fixed",
            objectFit: "cover",
            top: "0",
            left: "0",
            width: "100%",
            zIndex: -1
          }}
        />
      </div>
      <button onClick={handleKanye}>Handle</button>
    </div>
  );
};

export default Home;
