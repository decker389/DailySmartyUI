import React, { Component } from 'react';

import Logo from "./logo";
import Searchbar from "./searchbar";
import RecentPosts from "./recentPosts";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>
        <Logo />
        <Searchbar />
        <RecentPosts />
        </div>
      </div>
    );
  }
}
