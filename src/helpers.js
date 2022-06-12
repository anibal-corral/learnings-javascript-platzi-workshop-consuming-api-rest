function createMovies(movies,container){
    container.innerHTML='';
    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');
    movieContainer.addEventListener('click',()=>{
        location.hash="#movie="+movie.id;
    }
    )
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute(
          'src',
          'https://image.tmdb.org/t/p/w300' + movie.poster_path,
        );
    
        movieContainer.appendChild(movieImg);
        container.appendChild(movieContainer);
      });
}

function createCategories(categories,container){
    container.innerHTML='';
    categories.forEach(category => {
        // const categoriesPreviewList = document.querySelector('#categoriesPreview .categoriesPreview-list')
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');
        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id'+category.id);
        categoryTitle.addEventListener('click',()=>{
          location.hash='#category='+category.id+'-'+category.name
        });
        const categoryTitleText = document.createTextNode(category.name);
        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        container.appendChild(categoryContainer);
      });
}