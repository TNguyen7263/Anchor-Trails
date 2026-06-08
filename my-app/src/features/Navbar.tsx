import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/userAvatar";
//deciding on...
//text-xl font-bold text-center
//absolute left-1/2 -translate-x-1/2 text-xl font-bold
export default function Navbar() {
    const isLoggedIn = false;

    return (
        <nav className="sticky top-0 z-50 bg-background flex items-center justify-between px-6 py-4 border-b">
            <div></div>

            <h1 className="absolute left-1/2 -translate-x-1/2 text-xl font-bold" >
                My Receipt Calculator app
            </h1>

            {isLoggedIn ? (
                <UserAvatar name="PlaceHolder" imageURL="profile.jpg" />
            ) : (
                <div className="flex items-center gap-2">
                    <Button variant="ghost">
                        Sign Up
                    </Button>

                    <Button variant="ghost">
                        Login
                    </Button>
                </div>
            )}


        </nav>
    )
}