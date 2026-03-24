"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main" className="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-32 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="mt-4 text-muted-foreground">
        An unexpected error occurred.
      </p>
      <Button variant="outline" className="mt-8" onClick={reset}>
        Try again
      </Button>
    </main>
  );
}
