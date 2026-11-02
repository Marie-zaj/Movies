const movies = [
    { number: 1, movieName: "Titanic", year: 1997, rating: 7.9},
    { number: 2, movieName: "Avatar", year: 2009, rating: 7.9 },
    { number: 3, movieName: "The Green Mile", year: 1999, rating: 8.6 },
    { number: 4, movieName: "Inception", year: 2010, rating: 8.8 },
    { number: 5, movieName: "Interstellar", year: 2014, rating: 8.7 },
    { number: 6, movieName: "The Matrix", year: 1999, rating: 8.7 },
    { number: 7, movieName: "Joker", year: 2019, rating: 8.3 },
    { number: 8, movieName: "Forrest Gump", year: 1994, rating: 8.8 },
    { number: 9, movieName: "The Lion King", year: 1994, rating: 8.5 },
    { number: 10, movieName: "Gladiator", year: 2000, rating: 8.5 },
    { number: 11, movieName: "The Shawshank Redemption", year: 1994, rating: 9.3 },
    { number: 12, movieName: "Pulp Fiction", year: 1994, rating: 8.9 },
    { number: 13, movieName: "The Dark Knight", year: 2008, rating: 9.0 },
    { number: 14, movieName: "Harry Potter", year: 2001, rating: 7.6 },
    { number: 15, movieName: "Home Alone", year: 1990, rating: 7.7 },
    { number: 16, movieName: "The Notebook", year: 2004, rating: 7.8 },
    { number: 17, movieName: "La La Land", year: 2016, rating: 8.0 },
    { number: 18, movieName: "The Devil Wears Prada", year: 2006, rating: 6.9 },
    { number: 19, movieName: "The Hunger Games", year: 2012, rating: 7.2 },
    { number: 20, movieName: "The Fault in Our Stars", year: 2014, rating: 7.7 }
];
const moviesDiv = document.querySelector('.movies');
let content ="";

for(let i=0; i < movies.length; i++) {
    content +=`
    <div class="movie-card">
        <div>${movies[i].number} </div>
        <h2>${movies[i].movieName} </h2>
        <div>Year: ${movies[i].year} </div>
        <div>Rating: ${movies[i].rating} </div>
    </div>
    `;
}
moviesDiv.innerHTML = content;