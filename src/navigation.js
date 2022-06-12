searchFormBtn.addEventListener('click', ()=>{
    
    location.hash='#search='+searchFormInput.value;
});
trendingBtn.addEventListener('click', ()=>{
    location.hash='#trends';
});
arrowBtn.addEventListener('click', ()=>{
    // location.hash='#home';
    window.history.back();
});
window.addEventListener('DOMContentLoaded',navigator, false);
window.addEventListener('hashchange',navigator, false);
function navigator(){
    console.log(({location}));
    if(location.hash.startsWith('#trends')){
        trendPage();
    }else if(location.hash.startsWith('#search=')){
        searchPage();
    }else if(location.hash.startsWith('#movie=')){
        detailPage();
    }else if(location.hash.startsWith('#category=')){
        categoryPage();
    }else{
        homePage();
    }
    
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}

function trendPage(){
    console.log('TRENS'.padEnd(100,'*'));
    headerSection.classList.remove('header-container--long');
    headerSection.style.background='';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    headerCategoryTitle.innerHTML="Trends"
    searchForm.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    getTrendingMovies();
}
function searchPage(){
    console.log('SEARCH'.padEnd(100,'*'));
    headerSection.classList.remove('header-container--long');
    headerSection.style.background='';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    const [_,query] = location.hash.split('=');
    getMoviesByQuery(query);
}
function detailPage(){
    console.log('DETALLE MOVIE'.padEnd(100,'*'));
    headerSection.classList.add('header-container--long');
    headerSection.style.background='';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
}
function categoryPage(){
    console.log('CATEGORIE MOVIE'.padEnd(100,'*'));
    headerSection.classList.remove('header-container--long');
    headerSection.style.background='';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    const [_,categoryData] = location.hash.split('=');
    const [categoryId,categoryName]= categoryData.split('-');
    headerCategoryTitle.innerHTML=categoryName;

    getMoviesByCategory(categoryId);


}
function homePage(){
    console.log('HOME'.padEnd(100,'*'));
    headerSection.classList.remove('header-container--long');
    headerSection.style.background='';
    arrowBtn.classList.add('inactive');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');
    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive')
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');


    getTrendingMoviesPreview();
    getCategoriesPreview();
}