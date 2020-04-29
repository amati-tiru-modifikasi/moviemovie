import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div>
        Page Not Found ...
        <Link to="/">Back to home</Link>
      </div>
    );
  }
}

export default NotFound;
