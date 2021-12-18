import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux'

class Home extends Component {

  render(){
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A Pokeball" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

//data from the store is mapped to the props of the component in order to access it.
const mapStateToProps = (state) => {
  return {
    posts: state.posts //this object represents the different properties we want to add 
    //to the props in this component.
  }
}
//connect is a function that returns a higher order component.
//it must first be invoked, then the higher order component wraps the Home component.
//mapStateToProps is added to the connection function so that it knows what data to watch for
export default connect(mapStateToProps)(Home) 