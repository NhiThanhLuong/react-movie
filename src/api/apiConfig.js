const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3',
  apiKey: 'fd19588c32a80f7b2529607a095b5fa9',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
