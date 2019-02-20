import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostDetail from "./PostDetail";
import { getPost, leaveComment } from "./Blog.action";

const mapStateToProps = state => ({
  post: state.posts.post.data,
  comment: state.posts.commentList.status
});

export default withRouter(
  connect(
    mapStateToProps,
    { getPost, leaveComment }
  )(PostDetail)
);
