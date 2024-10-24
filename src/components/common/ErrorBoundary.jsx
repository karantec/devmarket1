// src/components/common/ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // You can log the error to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      return this.props.FallbackComponent ? (
        <this.props.FallbackComponent error={this.state.error} />
      ) : (
        <div>Something went wrong.</div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;