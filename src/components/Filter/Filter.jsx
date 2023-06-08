import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { filter } = this.props;
    return (
      <form>
        <label>Find contact</label>
        <input onChange={filter}></input>
      </form>
    );
  }
}
Filter.propTypes = {
  filterUsers: PropTypes.func,
};
