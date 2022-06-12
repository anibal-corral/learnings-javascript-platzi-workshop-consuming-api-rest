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