import React, { Component } from 'react';

import Logo from "./logo";
import Searchbar from "./searchbar";
import RecentPosts from "./recentPosts";

export default class Home extends Component {

  handleSearchBarSubmit = function(query) {
    this.props.history.push('/results');
  }

  render() {
    return (
      <div className='app'>
        <div>
        <Logo />
        <Searchbar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
        <RecentPosts />
        </div>
      </div>
    );
  }
}
