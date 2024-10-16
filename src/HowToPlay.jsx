export default function HowToPlay() {

    return (

        <div className="pl-5 pt-3">
            <h1>How to play</h1>
            <p>The goal is to guess the correct movie, given hints. <br />
            For each hint, you make a guess. If the guess was incorrect, you will be given another hint. <br />
            You have three guesses in total. After the third guess, you lose and will get the correct answer, even if you did not guess the correct movie.
            </p>
            <h3>The categories</h3>
            <p>There are currently two different game modes:</p>
            <h5>Swedish movies</h5> 
            <p>The movie will be one of Sweden's most popular movies of all time.</p>
            <h5>International movies</h5> 
            <p>The movie will be one of the most popular movies of all time, internationally.</p>
            <h3>The hints</h3>
            <h5>Hint 1</h5>
            <p>The first hint will give you the movie's release year, genres and production country.</p>
            <h5>Hint 2</h5>
            <p>The second hint will give you the directors of the movie and the top cast. <br />
                The top cast consists of the movie's five most popular actors.</p>
            <h5>Hint 3</h5>
            <p>The third, and last hint, will give you the plot of the movie.</p>

        </div>

    )
}