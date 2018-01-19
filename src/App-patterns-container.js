import React, { Component } from 'react';
// import './App.css';

const PlanetView = ({ loading, planet, error }) => {
  const renderLoading = () => 
    <div>Loading...</div>

  const renderError = () =>
    <div>There was an error, please try again.</div>

  const renderPlanet = () => {
    const { name, climate, terrain } = planet;

    return (
      <div>
        <h2>{name}</h2>
        <div>Climate: {climate}</div>
        <div>Terrain: {terrain}</div>
      </div>
    )
  }

  if (loading) {
    return renderLoading();
  } else if (planet) {
    return renderPlanet();
  } else {
    return renderError();
  }
}

class App extends Component {
  state = { 
    loading: true,
    planet: null,
    error: null,
  };

  componentDidMount() {
    fetch('https://swapi.co/api/planets/5')
      .then(res => res.json())
      .then(
        planet => this.setState({ loading: false, planet }),
        error => this.setState({ loading: false, error })
      );
  }

  render() {
    return <PlanetView {...this.state} />
  }
}


export default App;