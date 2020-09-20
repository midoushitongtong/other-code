async function renderMovies() {
  await fetch('http://localhost:3000/api/theaterMovies')
    .then((res) => res.json())
    .then((movies) => {
      let moviesHtml = '';

      movies.forEach((movie) => {
        moviesHtml += `
            <div class="movie-item-wrapper">
              <div class="movie-item">
                <img src="${movie.image}" alt="${movie.title}" class="movie-image" />
                <div class="movie-title">${movie.title}</div>
              </div>
            </div>
          `;
      });

      document.querySelector('.movie-list').innerHTML = moviesHtml;
    });
}

function registerSW() {
  if ('serviceWorker') {
    navigator.serviceWorker.register('./sw.js');
  }
}

window.addEventListener('DOMContentLoaded', renderMovies);

window.addEventListener('load', registerSW);
