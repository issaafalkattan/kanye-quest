import React from "react";

const KimQuotedashian = ({ quote, color, from, to }) => {
  return (
    <div style={{ textAlign: 'center', fontSize: '34px' }}>

      <p className="signature">
        {from && <>
          From: {from}</>
        }
        {' '}
        {to && <>
          to: {to}</>
        }
      </p>


      <h2 className="qoute" >
        <span style={{ color: "white" }}>{quote}</span>
      </h2>
      <h3 className="signature">
        - Kanye West
      </h3>
      <style>
        {`
      @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
      @import url('https://fonts.googleapis.com/css?family=Reenie+Beanie&display=swap');

   .qoute {
    font-family: 'Montserrat', sans-serif;
    color: white;
    text-transform: uppercase;
    width: 60%;
    text-align: center;
    margin: auto;
    margin-top: 10%;
    quotes: "\\201C""\\201D""\\2018""\\2019";
    word-break: break-word; 

   }
   .qoute:before {
    content: open-quote;
    display: inline;
    height: 0;
    line-height: 0;
    left: -10px;
    position: relative;
    top: 30px;
    color: #ccc;
    font-size: 4em;
  }
  .qoute::after {
    content: close-quote;
    display: inline;
    height: 0;
    line-height: 0;
    left: 10px;
    position: relative;
    top: 120px;
    color: #ccc;
    font-size: 4em;
  }
  .signature{
    font-family: 'Reenie Beanie', cursive;
    color: white;
  }
      `}
      </style>
    </div>)

};

export default KimQuotedashian;
