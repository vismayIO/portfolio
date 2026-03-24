import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-32 sm:px-6 lg:px-8">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">Page not found</p>
      <Button variant="outline" className="mt-8" asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </main>
  );
}
