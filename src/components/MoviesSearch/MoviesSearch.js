import React from 'react'
import { connect } from 'react-redux'
import {FormControl, FormGroup,Button} from 'react-bootstrap'
import {getMovies} from "../../state/movies";

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
        console.log(this.state.searchInput)
      }


    return (
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
  moviesData: state.movies.moviesData
})

const mapDispatchToProps = dispatch => ({
  getMovies: searchInput => dispatch(getMovies(searchInput))
})

export default connect(
  mapStateToProps
)(MoviesSearch)

