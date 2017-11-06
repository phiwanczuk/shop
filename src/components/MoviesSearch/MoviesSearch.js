import React from 'react'
import { connect } from 'react-redux'
import {FormControl, FormGroup,Button} from 'react-bootstrap'
import {getMovies} from "../../state/movies";

import LoadingIndicator from '../LoadingIndicator'

class MoviesSearch extends React.Component{
  state={
    searchInput:''
  }
  render(){
    const searchInputHandler = (event) => {
      this.setState({
        searchInput: event.target.value
      })
    }
      const searchClickHandler = event => {
        this.props.getMovies(this.state.searchInput)
      }


    return (
      this.props.isMoviesFetching ?
        <LoadingIndicator/>
        :
      <div>
        <FormGroup>
          <FormControl
          onChange={searchInputHandler}
          />
        </FormGroup>
        <FormGroup>
          <Button
          onClick={searchClickHandler}
          >Wyszukaj</Button>
        </FormGroup>
        {this.props.moviesData
          .map((movie,index)=>(
        <div key={index}>
          <h4>{movie.Title}</h4>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  moviesData: state.movies.moviesData,
  isMoviesFetching: state.movies.isMoviesFetching
})

const mapDispatchToProps = dispatch => ({
  getMovies: searchInput => dispatch(getMovies(searchInput))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesSearch)

