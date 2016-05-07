import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchChat } from '../actions/index';
import { Link } from 'react-router';

export default class BotActivity extends Component {
  // componentWillMount() {
  //   this.props.fetchChat();
  // }

  // renderChat() {
  //   return this.props.messages.map((message) => {
  //     return (
  //       <li className="list-group-item" key={message.id}>
  //         List Item!
  //       </li>
  //     );
  //   });
  // }

  render() {
    return (
      <div>
        <h1>Activity</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Date/Time</th>
              <th>Channel</th>
              <th>Bot Message</th>
              <th>API/Response</th>
              <th>Activity Type</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Temp</td><td>Temp</td><td>Temp</td><td>Temp</td><td>Temp</td></tr>
            <tr><td>Temp</td><td>Temp</td><td>Temp</td><td>Temp</td><td>Temp</td></tr>
            <tr><td>Temp</td><td>Temp</td><td>Temp</td><td>Temp</td><td>Temp</td></tr>
            <tr><td>Temp</td><td>Temp</td><td>Temp</td><td>Temp</td><td>Temp</td></tr>
            <tr><td>Temp</td><td>Temp</td><td>Temp</td><td>Temp</td><td>Temp</td></tr>
            <tr><td>Temp</td><td>Temp</td><td>Temp</td><td>Temp</td><td>Temp</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { messages: state.posts.all };
// }

// export default connect(mapStateToProps, { fetchChat })(BotActivity);