import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import { UserAvatar } from "@/components/userAvatar";

export default function HomePage() {
  return (

    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <UserAvatar name="Thao Nguyen" imageURL="/profile.jpg" />

      <h1 className="text-5xl font-bold">
        First Stop: Receipt Calculator
      </h1>

      <p className="text-muted-foreground">
        Built with Next.js, NestJS, FastAPI, and Cloud Infrastructure
      </p>

      <Button>
        Get Started
      </Button>

      <Navbar />
    </main>
  );
}


