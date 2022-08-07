"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',"");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, //пустой объект
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB);

const answer = prompt('Один из просмотренных фильмов?',"");
const mark = prompt('На сколько оцените его?',"");
const answer2 = prompt('Один из просмотренных фильмов?',"");
const mark2 = prompt('На сколько оцените его?',"");

personalMovieDB.movies[answer] = mark;
personalMovieDB.movies[answer2] = mark2;

console.log(personalMovieDB);