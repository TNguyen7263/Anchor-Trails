import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold">
        My Modern Web App
      </h1>

      <p className="text-muted-foreground">
        Built with Next.js, NestJS, FastAPI, and Cloud Infrastructure
      </p>

      <Button>
        Get Started
      </Button>
    </main>
  );
}

