import React from 'react';
import { useSelector } from "react-redux";

import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
    const classes = useStyles();
    // a new lowercase "posts" variable to store the return value...the variable names are a bit confusing... 
    // the callback of "useSelector" have access to the global/whole store, which is the "state" parameter below
    // (state) => state.posts  <-- this is to immediately return the "posts"...from the reducers.index.js 
    const posts = useSelector((state) => state.posts);

    console.log(posts);

    return (
        <>
            <h1>Products</h1>
            <Post />
            <Post />        
        </>
    )
};

export default Posts;
