


export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientID = "180e468c7d3349fc871624b470778d92";

const scopes = [

    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-read-private",

];

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
    // we get following url after being redirected from authorization
    // http://localhost:3000/#access_token=BQCPOIHBj9HHOzDadIMI0vnPmTgfyho1i9on9x9IDPgqetDWXFxB0j9UEWO3Geu-Qo4dqA0PLMe5M99kvX1nfn8ifU14Kufh9U5T1oWdHwHdgx_6WZNC2Fhonbchanged0qcnu1QUFjlGvTXjxaXNLk46nBA9Om71jMxskt6uzSe4-Wg3h0HsO5EUKNmV5AieDpbZsznFgRvekNTs26q1E5LH_a&token_type=Bearer&expires_in=3600
    // from above url we just need the access token after #access_token= and before &token_type.
    return window.location.hash             // gets string from # till the end in the url
        .substring(1)                       // removes the #
        .split("&")                         // splits remaining string from & and stores split strings as array              
        .reduce((initial, item) => {        // gets the required string from the above split items. The function is run for each element of the array
            let parts = item.split("=");    // splits acess_token=BQC... into parts[0]=access_token and parts[1]=BQC...
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
}