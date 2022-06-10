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
}

function trendPage(){
    console.log('TRENS'.padEnd(100,'*'));

    getTrendingMoviesPreview();

}
function searchPage(){
    console.log('SEARCH'.padEnd(100,'*'));
}
function detailPage(){
    console.log('DETALLE MOVIE'.padEnd(100,'*'));
}
function categoryPage(){
    console.log('CATEGORIE MOVIE'.padEnd(100,'*'));
    getCategoriesPreview();
}
function homePage(){
    console.log('HOME'.padEnd(100,'*'));
    getTrendingMoviesPreview();
    getCategoriesPreview();
}