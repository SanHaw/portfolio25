import React from 'react';

type P = { children: React.ReactNode };
type S = { hasError: boolean; msg?: string; stack?: string };

export default class ErrorBoundary extends React.Component<P, S> {
  state: S = { hasError: false };
  static getDerivedStateFromError(err: any) { return { hasError: true }; }
  componentDidCatch(error: any, info: any) {
    this.setState({ msg: String(error?.message), stack: info?.componentStack });
    console.error('ErrorBoundary caught', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <pre style={{ padding: 16, whiteSpace: 'pre-wrap' }}>
{`💥 Runtime error
Message: ${this.state.msg ?? '(no message)'}
Where:   ${this.state.stack ?? '(no stack)'}
`}
        </pre>
      );
    }
    return this.props.children;
  }
}
