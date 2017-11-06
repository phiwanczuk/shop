import React from 'react'
import { connect } from 'react-redux'
import {FormControl, FormGroup,Button} from 'react-bootstrap'

class MoviesSearch extends React.Component{
  render(){
    return (
      <div>
        <FormGroup>
          <FormControl/>
        </FormGroup>
        <FormGroup>
          <Button>Wyszukaj</Button>
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

export default connect(
  mapStateToProps
)(MoviesSearch)

