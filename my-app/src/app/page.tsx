import { Button } from "@/components/ui/button"
import Navbar from "@/features/Navbar"
import UsersList from "@/features/UsersList"

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <div className="flex">
        <UsersList />

        <section className="min-h-screen flex flex-col items-center justify-center gap-6">
          <h1 className="text-5xl font-bold">
            First Stop: Receipt Calculator
          </h1>

          <p className="text-muted-foreground">
            Built with Next.js, NestJS, FastAPI, and Cloud Infrastructure
          </p>

          <Button>
            Get Started
          </Button>
        </section>
      </div>

    </main>
  );
}


