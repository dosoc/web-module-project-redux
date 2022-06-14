import React from 'react';
import { connect } from 'react-redux'
import { removeFavorite } from '../actions/favoritesActions'
import { useHistory } from 'react-router-dom'

import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    const { push } = useHistory();

    const handleRemove = (id) => {
        props.removeFavorite(id)
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span id={movie.id} onClick={()=>handleRemove(movie.id)} className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = state => {
    return{
        favorites: state.favorites.favorites
    }
}

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);