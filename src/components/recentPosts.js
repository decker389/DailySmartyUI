import React, { Component } from "react";

export default class RecentPosts extends Component {
    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts-wrapper">
                    <div className="recent-posts-heading">Recent Posts</div>
                    <ul className="recent-posts-posts">
                        <li>recent post</li>
                        <li>recent post</li>
                        <li>recent post</li>
                    </ul>
                </div>

            </div>
        )
    }
}