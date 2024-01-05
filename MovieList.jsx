import { Component } from 'react';
import React from 'react';
import classes from './MovieList.module.css'

class MovieList extends React.Component {
  render() {
    const movies = ['One Piece - RED', 'One Piece - GOLD', 'One Piece - STAMPEDE'];
    return (
        <div>
            <h3>Movie List</h3>
            <ul>
            {movies.map((movie, index) => <li key={index}>{movie}</li>)}
            </ul>
        </div>
    );
  }
}

export default MovieList;
