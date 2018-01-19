import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import './App.css';

class DagobahRP extends Component {
  state = { loading: true };

  componentDidMount() {
    fetch('https://swapi.co/api/planets/5')
      .then(res => res.json())
      .then(
        planet => this.setState({ loading: false, planet }),
        error => this.setState({ loading: false, error })
      )
  }

  render() {
    return this.props.render(this.state);
  }
}

const LoadingView = () =>
  <div>Loading...</div>

const ErrorView = () =>
  <div>There was an error, please try again.</div>

const PlanetView = ({ name, climate, terrain }) =>
  <div>
    <h2>{name}</h2>
    <div>Climate: {climate}</div>
    <div>Terrain: {terrain}</div>
  </div>


export default () =>
  <DagobahRP 
    render={({ loading, error, planet }) => {
      if(loading) {
        return <LoadingView />;
      } else if (planet) {
        return <PlanetView {...planet} />;
      } else {
        return <ErrorView />;
      }
    }}
  />
;