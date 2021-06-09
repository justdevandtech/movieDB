
const MovieUI = document.getElementById("MovieCard");

const poperCloseBtn = document.querySelector(".poperCloseBtn");
const poperImage = document.querySelector(".poperImage");
const poperTitle = document.querySelector(".poperTitle");
const poperReview = document.querySelector(".movieDescrt");
const poperReleasedDate = document.querySelector(".poperReleasedDate");
const userScore = document.querySelector(".userScore");
const moviesDetailspoper = document.querySelector(".movieDetailsPoperContainer"); 



let url =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=2cda2302f40d21e8f5e4afc8db7519bb";

  async function app() {

    try {
       const response = await fetch(url);
       const data = await response.json();
       console.log(data);
       let UI = data.results.map((item, index) => {
         return ` <div class="col-sm-6 col-md-4 col-lg-3 mt-4 crd eachMovieCard">
                <div class="card">
                    <img class="card-img-top movieImg" src="https://image.tmdb.org/t/p/w500/${item.poster_path}" style="height: 250px;">
                    <div class="card-block">
                        <figure class="profile">
                            <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="profile-avatar" alt="">
                        </figure>
                        <h4 class="card-title movieTitle mt-3">${item.original_title}</h4>
                        <div class="meta">
                            <a class="text-capitalize userScore">Lang: ${item.original_language} - Users score: ${item.vote_average}(${item.vote_count})</a>
                        </div>
                        <div class="card-text movieReview display-none">
                            ${item.overview}
                        </div>
                    </div>
                    <div class="card-footer">
                        <small class="releaseDate">Released: ${item.release_date}</small>
                        <button class="btn btn-secondary float-right btn-sm"><i class="fas fa-eye"></i> ${item.popularity}</button>
                    </div>
                </div>
            </div>`;
       }).join('');
      MovieUI.innerHTML = UI;
      let eachMovies_item = document.querySelectorAll(".eachMovieCard");
      


      eachMovies_item.forEach((item) =>{
        let movieTitle = item.querySelector(".movieTitle");
        let movieReview = item.querySelector(".movieReview");
        let movieImg = item.querySelector(".movieImg");
        let releaseDate = item.querySelector(".releaseDate");
        let user_Score = item.querySelector(".userScore");
        
        
       

        item.addEventListener('click', () =>{
          moviesDetailspoper.classList.add("poperActive");
          poperTitle.innerHTML = movieTitle.textContent
          poperReview.innerHTML = movieReview.textContent
          poperImage.src = movieImg.src
          poperReleasedDate.innerHTML = releaseDate.textContent;
          userScore.innerHTML = user_Score.textContent
       
          
        })
      })

poperCloseBtn.addEventListener("click", () => {
  moviesDetailspoper.classList.remove("poperActive");
})


    } catch (error) {
      MovieUI.innerHTML = "Page 404, " + error + " " + "data from the server" 
      console.log("internal error, server not responding");
    }
   }

   app()