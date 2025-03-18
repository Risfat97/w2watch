export default {
    expo: {
        scheme: "w2watch",
        newArchEnabled: true,
        extra: {
            TOKEN_TMDB_API: process.env.TOKEN_TMDB_API,
            TMDB_API_BASE_URL: process.env.TMDB_API_BASE_URL,
        },
    },
  };