
const MovieUI = document.getElementById("MovieCard");

const poperCloseBtn = document.querySelector(".poperCloseBtn");
const poperImage = document.querySelector(".poperImage");
const poperTitle = document.querySelector(".poperTitle");
const poperReview = document.querySelector(".movieDescrt");
const poperReleasedDate = document.querySelector(".poperReleasedDate");
const userScore = document.querySelector(".userScore");
const moviesDetailspoper = document.querySelector(".movieDetailsPoperContainer"); 



let movieDatas = [];

 const app =  async () => {

   try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=2cda2302f40d21e8f5e4afc8db7519bb"
      );
        movieDatas = await response.json();
       displayMovie(movieDatas);
   } catch (error) {
     console.log(error);
   }
  };

const displayMovie = (movies) => {
 
    const dataFromMovieAPI = movies.results
      .map(movie_item => {
        return ` <div class="col-sm-6 col-md-4 col-lg-3 mt-4 crd eachMovieCard">
                <div class="card" style="height: 25rem;">
                    <img class="card-img-top movieImg" src="https://image.tmdb.org/t/p/w500/${movie_item.poster_path}" style="height: 160px;">
                    <div class="card-block">
                        <figure class="profile">
                            <img src="https://image.tmdb.org/t/p/w500/${movie_item.poster_path}" class="profile-avatar" alt="">
                        </figure>
                        <h4 class="card-title movieTitle mt-3">${movie_item.original_title}</h4>
                        <div class="meta">
                            <a class="text-capitalize userScore">Lang: ${movie_item.original_language} - Users score: ${movie_item.vote_average}(${movie_item.vote_count})</a>
                        </div>
                        <div class="card-text movieReview display-none">
                            ${movie_item.overview}
                        </div>
                    </div>
                    <div class="card-footer">
                        <small class="releaseDate">Released: ${movie_item.release_date}</small>
                        <button class="btn btn-secondary float-right btn-sm"><i class="fas fa-eye"></i> ${movie_item.popularity}</button>
                    </div>
                </div>
            </div>
            `;
      })
      .join("");
    MovieUI.innerHTML = dataFromMovieAPI;

    let eachMovies_item = document.querySelectorAll(".eachMovieCard");
          eachMovies_item.forEach(item => {
            let movieTitle = item.querySelector(".movieTitle");
            let movieReview = item.querySelector(".movieReview");
            let movieImg = item.querySelector(".movieImg");
            let releaseDate = item.querySelector(".releaseDate");
            let user_Score = item.querySelector(".userScore");

            item.addEventListener("click", () => {
              moviesDetailspoper.classList.add("poperActive");
              poperTitle.innerHTML = movieTitle.textContent;
              poperReview.innerHTML = movieReview.textContent;
              poperImage.src = movieImg.src;
              poperReleasedDate.innerHTML = releaseDate.textContent;
              userScore.innerHTML = user_Score.textContent;
            });
          });

          /* close poper btn */
         poperCloseBtn.addEventListener("click", () => {
           moviesDetailspoper.classList.remove("poperActive");
         });

};

 app();
 
