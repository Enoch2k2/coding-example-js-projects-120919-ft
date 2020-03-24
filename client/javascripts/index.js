
document.addEventListener('DOMContentLoaded', function () {
  loadMovies();
})

function loadMovies() {
  // connect to our rails end and grab our movie data and return said data

  fetch('http://localhost:3000/movies')
    .then(function (response) {
      return response.json();
    })
    .then(function (movies) {
      renderMovies(movies)
    })

}

function renderMovies(movies) {
  // should take movie data, iterate through movie data, put data on page

  let movieList = document.querySelector('div#movie-list');

  movies.forEach(function (movie) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    div.setAttribute('class', 'movie-item');
    h3.setAttribute('class', 'movie-title');
    p.setAttribute('class', 'movie-description');

    h3.innerText = movie.title;
    p.innerText = movie.description;
    div.appendChild(h3);
    div.appendChild(p);

    movieList.appendChild(div);
  })
}