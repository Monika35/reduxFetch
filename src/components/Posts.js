import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';
import PropTypes from 'prop-types';

class Posts extends Component{

    //ne ni treba konstruktor bidejki ne ni treba state vishe
    // constructor(props){
    //     super(props);
    //     this.state={
    //         posts: []
    //     }
    // }

    // componentWillMount(){
    //    fetch('https://jsonplaceholder.typicode.com/posts')
    //        .then(res=>res.json())
    //        .then(data =>this.setState({posts:data}));
    // }


    componentWillMount(){
       this.props.fetchPosts();
    }

    render(){
        const postItems= this.props.posts.map(post=>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

//get state from redux and map to posts
const mapStateToProps = state => ({
    posts: state.posts.items //bidejkji vo root component zacuvano ni e kako posts

})
//fetchPosts jast call the retch request, the same like we do in componentDidMount
export default connect(mapStateToProps,{fetchPosts})(Posts);