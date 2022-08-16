"use strict";

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',"");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {}, //пустой объект
//     actors: {},
//     genres: [],
//     privat: false
// };

// console.log(personalMovieDB);

// const answer = prompt('Один из просмотренных фильмов?',"");
// const mark = prompt('На сколько оцените его?',"");
// const answer2 = prompt('Один из просмотренных фильмов?',"");
// const mark2 = prompt('На сколько оцените его?',"");

// personalMovieDB.movies[answer] = mark;
// personalMovieDB.movies[answer2] = mark2;

// console.log(personalMovieDB);
let numberOfFilms;
let answer = '';
let mark = '';

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, //пустой объект
    actors: {},
    genres: [],
    privat: false
};

detectPersonalLevel();
favoriteGenres();
rememberMyFilms();
showMyDB(personalMovieDB.privat);

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',"");
    while (numberOfFilms == "" || numberOfFilms==null || numberOfFilms<0 || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',"");
    }
}

function favoriteGenres() {
    for (let i=0;i<3;i++)
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}?`, "");
}

function detectPersonalLevel() {
    if (personalMovieDB.count<10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count>=10 && personalMovieDB.count<=30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count>30) {
        alert('Вы киноман');
    } else { alert('Произошла ошибка'); }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        answer = prompt('Один из просмотренных фильмов?',"");
        while (answer == null || answer == "" || answer.length>50) {
            answer = prompt('Один из просмотренных фильмов?',"");
        }
        mark = +prompt('На сколько оцените его?',"");
        while (mark == null || mark == "" || isNaN(mark)) {
            mark = +prompt('На сколько оцените его?',"");
        }
        personalMovieDB.movies[answer] = mark;
    }
}

function showMyDB(hidden) {
    if (hidden==false) {
        console.log(personalMovieDB);
    }
    else console.log("error");
}
