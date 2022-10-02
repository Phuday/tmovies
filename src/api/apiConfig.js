const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '5050e2e183edfb41e0080f7910a11fb2',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
