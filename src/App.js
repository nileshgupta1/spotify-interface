import React, { useEffect, useState } from "react"
import './App.css';
import Login from "./Login"
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js"
import { useDataLayerValue } from "./DataLayer";


const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";        //clears the url
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user,
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcSxdA9FmEXqu').then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      });

    }
  }, []);

  // console.log("👦", user);
  // console.log("🕵️‍♀️", token);

  return (<div className="app"> {token ? (< Player spotify={spotify} />) : (<Login />)} </div>);
}

export default App;













//useEffect(() => {},[var]) : Runs code based on a given condition which is present inside the function and
//runs once when App component loads and everytime var changes or runs only once if empty [] is given as second parameter
