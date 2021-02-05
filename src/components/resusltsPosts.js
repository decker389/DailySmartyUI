import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from '../actions';

class ResultsPosts extends Component {
    render() {
        return (
            <ul className="results-posts">
                <div className="results-posts-wrapper">
                    <ul className="results-posts_posts">
                        Results Go Here
                    </ul>
                </div>
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, actions)(ResultsPosts);