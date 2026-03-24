"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Something went wrong</h1>
          <button
            onClick={reset}
            className="mt-8 border border-white px-4 py-2"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
