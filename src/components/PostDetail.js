import React from "react";

class PostDetail extends React.Component {
  state = {
    body: ""
  };
  componentDidMount() {
    const {
      getPost,
      match: {
        params: { id }
      }
    } = this.props;
    getPost({ data: { id: id } });
  }

  handleComment = event => {
    const {
      match: {
        params: { id }
      },
      leaveComment,
      getPost,
      history: { push }
    } = this.props;

    this.setState({
      body: event.target.value
    });
    if (event.target.name === "send") {
      leaveComment({ data: { postId: id, body: this.state.body } });
      //notification success
      setTimeout(function() {
        push("/blog");
      }, 3000);
    }
  };
  render() {
    const {
      post: { title, body, comments }
    } = this.props;
    return (
      <div className="PostDetail">
        <h1>{title ? title : "Without  Title"}</h1>
        <p>{body}</p>
        {comments &&
          comments.length > 0 &&
          comments.map((index, comment) => <p>{comment.body}</p>)}
        <textarea
          name="message"
          value={this.state.body}
          onChange={this.handleComment}
        />

        <button name="send" onClick={this.handleComment}>
          Leave Comment
        </button>
      </div>
    );
  }
}

export default PostDetail;
