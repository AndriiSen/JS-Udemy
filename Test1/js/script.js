 "use strict";

const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'значение по умолчанию');

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    ganres: [],
    private: false
};

const a = prompt('Один из последних просмотреных фильмов', ''),
      b = prompt('На сколько оцениваете его', ''),
      c = prompt('Один из последних просмотреных фильмов', ''),
      d = prompt('На сколько оцениваете его', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);