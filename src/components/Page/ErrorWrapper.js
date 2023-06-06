import React, { Component } from 'react';

class ErrorWrapper extends Component {
  render() {
    const { isError, children } = this.props;
    if (isError) {
      return <h1>Ooops!!! Something went wrong!</h1>;
    }
    return <>{children}</>;
  }
}
export default ErrorWrapper;
