import React, { Component } from "react";

import Logo from "./logo";
import SearchBar from "./searchbar";

export default class Results extends Component {

    handleSearchBarSubmit(query) {

    }

    render() {
        return( 
            <div>
                <Logo size={55}/>
                <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
            </div>
        )
    }
}