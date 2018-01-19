import React, { Component } from 'react';
// import './App.css';

const ViewLoading = () => 
  <div>Loading...</div>

const ViewError = () =>
  <div>There was an error, please try again.</div>

const ViewPlanet = ({ name, climate, terrain }) =>
    <div>
      <h2>{name}</h2>
      <div>Climate: {climate}</div>
      <div>Terrain: {terrain}</div>
    </div>

const PlanetBranch = ({ loading, planet }) => {

  if (loading) {
    return ViewLoading();
  } else if (planet) {
    return ViewPlanet(planet);
  } else {
    return ViewError();
  }
}

class App extends Component {
  state = { loading: true };

  componentDidMount() {
    fetch('https://swapi.co/api/planets/5')
      .then(res => res.json())
      .then(
        planet => this.setState({ loading: false, planet }),
        error => this.setState({ loading: false, error })
      );
  }

  render() {
    return <PlanetBranch {...this.state} />
  }
}

export default App;