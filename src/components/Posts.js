import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts} from '../actions/postActions';
import PropTypes from 'prop-types';

class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
       if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.nextPost);
       }
    }

    render() { 
        let postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3 className="contentTitle">{post.title}</h3>
                <p className="contentBody">{post.body}</p>
            </div>
        ));

        return (
            <div>
                <h1 className="postsTitle">Posts</h1>
                { postItems }
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = state => ({
   posts: state.posts.items,
   newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);

