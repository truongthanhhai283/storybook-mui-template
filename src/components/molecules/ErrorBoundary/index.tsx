import type { ReactNode, ErrorInfo } from "react";
import { Component } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(_error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can use your own error logging service here
    console.error("Uncaught error:", { error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Sorry... there was an error.</h1>;
    }

    return this.props.children;
  }
}
