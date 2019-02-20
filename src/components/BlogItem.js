import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../routes";
import api from "../api";

class PostItem extends React.Component {
  state = {
    idDeleted: "",
    isUpdated: "",
    body: "",
    title: ""
  };

  handleDeleteBlog = event => {
    event.preventDefault();

    const {
      post,
      post: { id }
    } = this.props;
    if (window.confirm("Would you like to delete?") === true)
      api.posts.deletePost({ id: id }).then(res => {
        if (res.data) {
          this.setState({
            isDeleted: "deleted"
          });
          // notification(
          //   "success",
        } else {
          event.preventDefault();
          // notification(
          //   "error",
        }
      });
  };

  render() {
    const { isDeleted } = this.state;
    const {
      post,
      post: { id }
    } = this.props;

    return (
      <Fragment>
        {isDeleted === "deleted" ? (
          ""
        ) : (
          <Fragment>
            <NavLink
              style={{ color: "black", textDecoration: "none" }}
              to={`${routes.post_detail_route_name}${id}`}
            >
              <div className="BlogItem">
                <span
                  style={{ float: "right" }}
                  onClick={this.handleDeleteBlog}
                  name="delete"
                  className="delete"
                >
                  <i />X
                </span>
                <NavLink
                  style={{
                    color: "black",
                    textDecoration: "none",
                    float: "right",
                    paddingRight: 10
                  }}
                  to={`${routes.edit_route_name}${id}`}
                >
                  <span>Edit </span>
                </NavLink>
                <h1>{post.title ? post.title : "Without  Title"}</h1>

                <p>{post.body ? post.body : "Without Body"}</p>
              </div>
            </NavLink>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default PostItem;
