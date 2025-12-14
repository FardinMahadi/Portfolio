'use client';

import type {
  ErrorBoundaryProps,
  ErrorBoundaryState,
  ErrorBoundaryErrorInfo,
} from '@/components/types/shared/error';

import { Component } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorBoundaryErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          className="text-theme-text flex min-h-screen items-center justify-center bg-(--color-background) px-4"
          style={{
            background: `
              radial-gradient(circle at top left, color-mix(in srgb, var(--color-primary) 18%, transparent), transparent 60%),
              radial-gradient(circle at bottom right, color-mix(in srgb, var(--color-accent) 18%, transparent), transparent 65%),
              var(--color-background)
            `,
          }}
        >
          <div className="mx-auto w-full max-w-2xl text-center">
            <div
              className="border-theme-border/60 shadow-theme-primary/10 rounded-lg border p-8 shadow-lg backdrop-blur"
              style={{
                background:
                  'linear-gradient(to bottom right, color-mix(in srgb, var(--color-surface) 92%, transparent), color-mix(in srgb, var(--color-background) 88%, transparent))',
              }}
            >
              <div className="flex flex-col items-center gap-4">
                <AlertTriangle className="text-theme-accent h-16 w-16" />
                <h2 className="text-theme-accent font-mono text-2xl">Something went wrong</h2>
                <p className="text-theme-text/70">
                  {this.state.error?.message || 'An unexpected error occurred'}
                </p>
                <Button
                  onClick={() => {
                    this.setState({ hasError: false, error: null });
                    window.location.reload();
                  }}
                  className="text-theme-primary-foreground min-h-[44px] shadow-lg transition-all duration-300 hover:shadow-xl"
                  style={{
                    background:
                      'linear-gradient(to right, var(--color-primary), var(--color-secondary))',
                    boxShadow:
                      '0 10px 15px -3px rgba(0,0,0,0.2), 0 4px 6px -2px rgba(0,0,0,0.12), 0 0 25px -8px var(--color-primary)',
                  }}
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reload Page
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
