const unsplashAccessKey = process.env.UNSPLASH_KEY;
var keyword_extractor = require("keyword-extractor");

console.log(process.env)

export const getKanyefied = quote => {
  let keywords = keyword_extractor.extract(quote);
  return fetch(
    `https://api.unsplash.com/photos/random?query=${keywords[0]}&orientation=landscape`,
    { headers: { Authorization: `Client-ID ${unsplashAccessKey}` } }
  )
    .then(response => {
      return response.json();
    })
    .then(myJson => {
        console.log(myJson);
      return {url : myJson.urls.full, color : myJson.color, user : myJson.user.name};
    });
};

export const getQuote = () => {
  return fetch("https://api.kanye.rest?format=json")
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      return myJson.quote;
    });
};
