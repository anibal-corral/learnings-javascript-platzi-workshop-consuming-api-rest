const api = axios.create({
baseURL:'https://api.themoviedb.org/3/',
headers:{
  'Content-Type':'application/json;charset=utf-8'
},
params:{
  'api_key':API_KEY,
}

});


async function getTrendingMoviesPreview(){
  
  const {data} = await api('trending/movie/day');
  const movies = data.results;
  createMovies(movies,trendingMoviesPreviewList);
}

async function getCategoriesPreview(){
  const {data} = await api('genre/movie/list');
  const categories = data.genres;
  createCategories(categories,categoriesPreviewList);
}
async function getMoviesByCategory(id){
  
  const {data} = await api('/discover/movie',{
    params:{
      with_genres:id
    }
  });
  const movies = data.results;
    createMovies(movies,genericSection);
    
}
async function getMoviesByQuery(query){
  
  const {data} = await api('/search/movie',{
    params:{
      query:query
    }
  });
  const movies = data.results;
    createMovies(movies,genericSection);
    
}
async function getTrendingMovies(){
  
  const {data} = await api('trending/movie/day');
  const movies = data.results;
  createMovies(movies,genericSection);
}
async function getMovieById(movieId){
  const {data:movie} = await api('/movie/'+movieId);
  const movieImgUrl = 'https://image.tmdb.org/t/p/w500'+movie.poster_path;
  headerSection.style.background = `
  linear-gradient(
    180deg,
    rgba(0,0,0,0.35) 19.27%,
    rgba(0,0,0,0) 29.17%
  ),
  url(${movieImgUrl})`;

  movieDetailTitle.textContent=movie.title;
  movieDetailDescription.textContent=movie.overview;
  movieDetailScore.textContent=movie.vote_average;
  movieDetail
  createCategories(movie.genres,movieDetailCategoriesList);
  getRelatedMoviesId(movie.id);
}
async function getRelatedMoviesId(movieId){
  const {data} = await api('/movie/'+movieId+'/recommendations');
  const relatedMovies=data.results;
  createMovies(relatedMovies,relatedMoviesContainer);

}