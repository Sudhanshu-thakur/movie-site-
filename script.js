const MOVIE_URL = 'https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=a183034ff0e773db98a567b284957b6e&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=a183034ff0e773db98a567b284957b6e&query="'
const SERIES_URL = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&sort_by=popularity.desc&api_key=a183034ff0e773db98a567b284957b6e&page=1'

const UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=a183034ff0e773db98a567b284957b6e&page=1'

getMovies(MOVIE_URL)

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

const logo = document.querySelector(".logo")

logo.addEventListener('click', goToHomePage())

function goToHomePage (){
    
}


const toggle = document.querySelector('.toggle-ball')
const itmes = document.querySelectorAll('.container,.navbar-container,.toggle,.search')


toggle.addEventListener('click', changeBackground)

function changeBackground (){
  itmes.forEach( x =>{
    x.classList.toggle("active")
  })
  
}

