// Import libraries
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Class component
class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    // ASYNC HTTP request to get albums from API
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

// Render all albums in response from API
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

// Render the component
  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

// Make component available to other parts of the app
export default AlbumList;
