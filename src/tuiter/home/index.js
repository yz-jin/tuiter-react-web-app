import React from "react";
import homePostsArray from '../home-post-list/home-posts.json';
import PostItem from "../home-post-list/post-item";

    const HomeComponent = () => {
        return (
            <ul className="list-group">
                {homePostsArray.map((post) => (
                    <PostItem key={post._id} post={post} />
                ))}
            </ul>
        );
    };
    export default HomeComponent;