import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };
    
        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h1 className="addPost">Add Post</h1>
                <form onSubmit={this.onSubmit} onReset={this.onReset}>
                    <div>
                        <label className="title">Title: </label>
                        <br />
                        <input type="text" name="title" className="blogTitle" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <br />
                    <div>
                        <label className="body">Body: </label><br />
                        <textarea name="body" className="blogBody" onChange={this.onChange} value={this.state.body} />
                    </div>
                    <br />
                    <button type="submit" value="Submit" className="postButton">POST</button>
                    <button type="cancel" value="Cancel" className="cancelButton">CANCEL</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};


export default connect(null, { createPost})(PostForm);

 