import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.tsx';
import './index.css';

// Error Boundary Component
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    console.error('Error caught by boundary:', error);
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0A0A',
          color: '#F97316',
          padding: '20px',
          textAlign: 'center',
          fontFamily: 'sans-serif',
          zIndex: 9999
        }}>
          <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Something went wrong</h1>
          <p style={{ marginBottom: '20px' }}>Please refresh the page or try again later.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#F97316',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main render function with error boundary
const renderApp = () => {
  try {
    const rootElement = document.getElementById('root');
    if (!rootElement) throw new Error('Root element not found');
    
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Failed to render app:', error);
    
    // Fallback error display if React fails to mount
    const fallbackElement = document.createElement('div');
    fallbackElement.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #0A0A0A;
      color: #F97316;
      padding: 20px;
      text-align: center;
      font-family: sans-serif;
      z-index: 9999;
    `;
    fallbackElement.innerHTML = `
      <h1 style="font-size: 24px; margin-bottom: 20px;">Critical Error</h1>
      <p style="margin-bottom: 20px;">Failed to load the application. Please check the console for details.</p>
      <button 
        onclick="window.location.reload()"
        style="
          padding: 10px 20px;
          background-color: #F97316;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        "
      >
        Try Again
      </button>
    `;
    
    document.body.innerHTML = '';
    document.body.appendChild(fallbackElement);
  }
};

// Initialize the app
renderApp();
