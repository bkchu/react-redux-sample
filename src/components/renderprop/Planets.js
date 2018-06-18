import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { getPlanets } from '../../ducks/asyncReducerExample';

class Planets extends Component {
  state = { planets: [] };
  componentDidMount() {
    this.props.getPlanets();
  }

  render() {
    return (
      <Fragment>
        {this.props.planetsLoading ? (
          <p>Planets Loading...</p>
        ) : (
          this.props.render(this.props.planets)
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state.people
});

export default connect(
  mapStateToProps,
  { getPlanets }
)(Planets);
