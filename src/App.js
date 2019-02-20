import React, { Component, Fragment } from "react";

import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store";
import Blog from "./components/Blog.container";
import PostDetail from "./components/PostDetail.container";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { routes } from "./routes";
import BlogEdit from "./components/BlogEdit";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          {/* <Blog /> */}
          <Switch>
            <Route path={routes.blog} component={Blog} />
            <Route path={routes.post_detail} component={PostDetail} />
            <Route path={routes.edit} component={BlogEdit} />
            <Redirect to={routes.root} />
          </Switch>
        </Fragment>
      </Provider>
    );
  }
}

export default withRouter(App);
