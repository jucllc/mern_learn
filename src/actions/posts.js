import * as api from '../api';

// Action Creators
// with redux...hence the second "=>" and "dispatch" in the following function
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        // return (dispatch) an "Action" here. An "Action" has two parts: "type" and "payload"
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
