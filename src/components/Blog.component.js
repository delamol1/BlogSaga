import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import BlogItem from "./BlogItem";
import api from "../api";

class Blog extends React.Component {
  state = {
    title: "",
    comment: "",
    isCreated: ""
  };

  handleSendPost = event => {
    const { getAllPosts } = this.props;
    if (event.target.name === "title") {
      this.setState({
        title: event.target.value
      });
    }

    if (event.target.name === "comment") {
      this.setState({
        comment: event.target.value
      });
    }

    if (event.target.name === "send") {
      api.posts
        .createPost({ title: this.state.title, body: this.state.comment })
        .then(res => {
          if (res.data) {
            this.setState({
              isCreated: "created"
            });
            getAllPosts();
          } else {
            event.preventDefault();
          }
        });
    }
  };

  componentDidMount() {
    const { getAllPosts, getPost } = this.props;
    getAllPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <Fragment>
        <div className="header">
          <h1>Blog</h1>
        </div>

        <div className="App">
          {posts &&
            posts.length > 0 &&
            posts.map(post => <BlogItem key={post.id} post={post} />)}
          <div className="BlogItem">
            <h1>Create Blog</h1>
            <span>Enter Comment</span>
            <input
              onChange={this.handleSendPost}
              name="comment"
              type="text"
              value={this.state.comment}
            />
            <span>Enter Title</span>
            <input
              onChange={this.handleSendPost}
              name="title"
              value={this.state.title}
              type="text"
            />
            <button name="send" onClick={this.handleSendPost}>
              Send
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Blog);
