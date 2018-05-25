import React from 'react';
import {connect} from 'react-redux';
import {fetchBooks} from "../redux/actions/books";
import {fetchUsers} from "../redux/actions/users";

const Dispatchers = (props) => (
  <div className="dispatchers">
    <button onClick={props.fetchBooks} className="dispatch-button">Books</button>
    <button onClick={props.fetchUsers} className="dispatch-button">Users</button>
  </div>
);

export default connect(null,{ fetchBooks, fetchUsers })(Dispatchers);
