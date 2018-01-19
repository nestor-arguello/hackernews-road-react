import React, { Component } from 'react';
// import './App.css';

class App extends Component {

  state = { 
    loading: true,
  };

  componentDidMount() {
    fetch('https://swapi.co/api/planets/5')
      .then(res => res.json())
      .then(
        planet => this.setState({ loading: false, planet }),
        error => this.setState({ loading: false, error })
      );
  }

  renderLoading = () => <div>Loading...</div>

  renderError = () => 
    <div>There was an error, please ty again.</div>
  
  renderPlanet= () => {
    const { name, climate, terrain } = this.state.planet;
    
    return (
      <div>
        <h2>{name}</h2>
        <div>Climate: {climate}</div>
        <div>Terrain: {terrain}</div>
      </div>
    )
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading();
      
    } else if (this.state.error) {
      return this.renderError();
    } else {
      return this.renderPlanet();
    }
  }
}


export default App;