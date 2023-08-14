const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}


function showMovies(movies){
 const container = document.querySelector('.container')
 container.innerHTML=''


 movies.forEach( (movie)=>{

    const {title , overview , poster_path , vote_average}= movie

    const movieEL = document.createElement('div')
    movieEL.classList.add('movie')

    movieEL.innerHTML = `
    <img
    src="${IMG_PATH + poster_path}"
    alt="${title}"
  />
  <div class="movie-name">
    <h3>${title}</h3>
    
    <span class="rating" style="background-color: ${ratingColor(vote_average)};">${vote_average}</span>
    </div>

  <div class="movie-overview">
    ${overview}
  </div>
  `
container.appendChild(movieEL)

 })
 
}




function ratingColor(vote) {
    if (vote > 8) {
        return "green";
    } else if (vote > 6 && vote <= 8) {
        return "orange";
    } else {
        return "red";
    }
}


form.addEventListener('submit',(e)=>{
         e.preventDefault()

         const searchTerm = search.value

         if(searchTerm && searchTerm !== ''){
            getMovies(SEARCH_API + searchTerm)

            search.value = ''
         }else{
            window.location.relode()
         }

})

// const logo = document.querySelector(".logo")

// logo.addEventListener('click', goToHomePage())

// function goToHomePage (){
//     window.location = '/';
// }