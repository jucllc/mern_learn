// a reducer takes two params: "state" and "action". state needs to have a default value
// since in this example, the "state" will be an array of posts, let's name it posts
//const reducer = (state, action) => {
// let's export it instead
//export default (posts = [], action) => { // this did NOT work...
const reducer = (posts = ["a", "b"], action) => {
        switch (action.type){
        case 'FETCH_ALL':
            // returning the payload (the posts data we fetch from api call) part of the "Action"
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;
    };
};

export default reducer;
