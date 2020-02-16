const unsplashAccessKey = process.env.UNSPLASH_KEY;


export const getImageUrl = quote => {
  return fetch(
    `https://api.unsplash.com/photos/random?query=${quote.split(" ")[0]}`,
    { headers: { Authorization: `Client-ID ${unsplashAccessKey}` } }
  )
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      return myJson.urls.full;
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
