import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/userAvatar";

export default function Navbar() {
    return (
        <nav className="stick top-0 z-50 bg-background flex items-center justify-between px-6 py-4 border-b">
            <h1 className="text-xl font-bold">
                My App
            </h1>

            <div>
                <Button variant="ghost">
                    Calculator
                </Button>

                <Button variant="ghost">
                    Login
                </Button>
            </div>

            <div>
                <UserAvatar name="Thao Nguyen" imageURL="profile.jpg" />
            </div>
        </nav>
    )
}