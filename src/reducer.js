export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: " BQAC_Xhaev1-vZ58pKQmbs2WMnQfWj4cBZWXW3CfVnO8lE9Rndb0gs7YHOnlDnFJJAWvjN4BQ3HYur_0DDsY7whnCV3pi1Vq47pAm6kMo_HKmeW4hsYiXsxsLPmBh5UOqo6YyrXzqlt0BJr507HHa6ffAIvRWoAot6bqJqSQUKqBOQm2A43zD2h1-UASJHk3NCOfnZsiOQKFfjzVsQrD",
}

const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [payload]

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }

}

export default reducer;