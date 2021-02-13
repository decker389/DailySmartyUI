import React, { Component } from 'react';
import { connect } from "react-redux";

import Logo from "./logo";
import Searchbar from "./searchbar";
import RecentPosts from "./recentPosts";
import * as actions from "../actions";

class Home extends Component {

  handleSearchBarSubmit = function(query) {
    this.props.fetchPostsWithQuery(query, () => {
      this.props.history.push('/results');
    });

  }

  render() {
    return (
      <div className='home'>
        <Logo />
        <Searchbar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
        <RecentPosts />
      </div>
    );
  }
}

export default connect(null, actions)(Home);