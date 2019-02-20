import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Blog from "./Blog.component";
import { getAllPosts } from "./Blog.action";

const mapStateToProps = state => ({
  posts: state.posts.postsList.data
});

export default withRouter(
  connect(
    mapStateToProps,
    { getAllPosts }
  )(Blog)
);
