import React, { Component } from 'react';

import Planets from './renderprop/Planets';
import List from './List/List';

import withPeople from './hoc/peopleHoc';
// import { connect } from 'react-redux';

// // Bringing in our action creator function definition from the reducer
// // also called a dispatcher
// import { updateNameAction } from '../ducks/standardReducerExample';
// import { getPeople } from '../ducks/asyncReducerExample';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  render() {
    //these props are coming from the peopleHoc
    const { loading, people } = this.props;

    const peopleDisplay = loading ? (
      <p>People Loading...</p>
    ) : (
      people[0] && people.map(person => <p key={person.url}>{person.name}</p>)
    );

    //loading states are abstracted into the Planets component.
    const planetDisplay = (
      <Planets render={planets => <List list={planets} type="name" />} />
    );

    return (
      <div>
        <h2>People</h2>
        {peopleDisplay}

        <h2>Planets</h2>
        {planetDisplay}
      </div>
    );
  }
}

// ES5
// function mapStateToProps(state) {
//   return state;
// }

// ES6
// A function that takes the state data from the store
// and PROVIDES it to the component as props
// const mapStateToProps = state => state;

// CAN FLATTEN STATE WHEN COMBINING REDUCERS
// Beware of conflicting key names
// const mapStateToProps = state => ({
//   ...state.people,
//   ...state.profile
// });

// Instead of using a variable for this object, we put it directly as the second
// argument to our connect method
// putting our dispatcher on props
// const mapDispatchToProps = {
//   updateNameAction
// }

// const decorator = connect(mapStateToProps, mapDispatchToProps)
// export default decorator(Profile);
//This is often done in a single line of code like this:
// export default connect(
//   mapStateToProps,
//   // using object shorthand, in longform would be { updateNameAction: updateNameAction}
//   { updateNameAction, getPeople }
// )(Profile);
export default withPeople(Profile);
