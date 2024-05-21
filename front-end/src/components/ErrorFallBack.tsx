import React from "react";
import { FallbackProps } from "react-error-boundary";
// import ErrorFallbackIcon from "./error-fallback.svg";

const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div className="error-boundary-fallback-wrapper">
      {/* <ErrorFallbackIcon /> */}
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Home</button>
    </div>
  );
};

export default ErrorFallback;
