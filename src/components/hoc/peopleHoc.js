import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPeople } from '../../ducks/asyncReducerExample';

function withPeople(WrappedComponent) {
  class Parent extends Component {
    componentDidMount() {
      this.props.getPeople();
    }
    // // this is for if I want to make a request based on an event
    // onGetPeopleHandler = () => {
    //   this.props.getPeople();
    // };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          people={this.props.people}
          loading={this.props.peopleLoading}
          // clicked={this.onGetPeopleHandler}
        />
      );
    }
  }

  const mapStateToProps = state => ({
    ...state.people
  });

  return connect(
    mapStateToProps,
    { getPeople }
  )(Parent);
}

export default withPeople;
