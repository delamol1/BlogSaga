import React from "react";
import api from "../api";

class BlogEdit extends React.Component {
  state = {
    title: "",
    body: "",
    isUpdated: ""
  };

  handleUpdatePost = event => {
    event.preventDefault();
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;

    if (event.target.name === "title") {
      this.setState({
        title: event.target.value
      });
    }

    if (event.target.name === "comment") {
      this.setState({
        body: event.target.value
      });
    }

    if (event.target.name === "send") {
      api.posts
        .updatePost(
          { data: { title: this.state.title, body: this.state.body } },
          id
        )
        .then(res => {
          if (res.data) {
            this.setState({
              isUpdated: "updated"
            });

            // notification(
            //   "success",
            setTimeout(function() {
              push("/blog");
            }, 3000);
          } else {
            event.preventDefault();
            // notification(
            //   "error",
          }
        });
    }
  };

  render() {
    return (
      <div>
        <h1>Edit Post</h1>
        <h2>Enter Title</h2>
        <input
          onChange={this.handleUpdatePost}
          name="title"
          value={this.state.title}
          type="text"
        />
        <h2>Enter Comment</h2>
        <input
          onChange={this.handleUpdatePost}
          name="comment"
          type="text"
          value={this.state.body}
        />
        <br />
        <button name="send" onClick={this.handleUpdatePost}>
          Send
        </button>
      </div>
    );
  }
}

export default BlogEdit;
