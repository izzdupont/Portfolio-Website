import React from 'react';

function logErrorToMyService(error, errorInfo) {
  console.error('Error:', error);
  console.error('Error Info:', errorInfo);

  // You can add your custom error handling logic here
  // For example, send the error data to a server or a logging service
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;