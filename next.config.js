require('dotenv').config()

module.exports = {
    devIndicators: {
      autoPrerender: false,
    },
    env: {
      'UNSPLASH_KEY': process.env.UNSPLASH_KEY
    }
  }
  