import { combineReducers } from "redux";

import posts from './posts';

// the param format is key: value. In the following, since key and value are both "posts", only one is remained
export default combineReducers({ posts });
