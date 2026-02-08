"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20 text-center">
      <h2 className="font-mono font-bold text-2xl mb-4 text-white">
        Something went wrong
      </h2>
      <p className="text-gray-400 mb-8">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-6 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
