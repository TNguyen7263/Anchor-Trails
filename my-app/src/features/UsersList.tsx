import { UserAvatar } from "@/components/userAvatar";
import { Button } from "@/components/ui/button";

export default function UsersList() {
    const participants = ["Hello", "World"];

    return (
        <section className="rounded-lg border p-4">

            <div className="mb-4 flex items-bottom justify-between">
                <h2 className="font-semibold">
                    Participants
                </h2>

                <Button size="sm">
                    + Add
                </Button>
            </div>



            <div className="h-64 overflow-y-auto">
                {participants.map((p) => (
                    <div key={p} className="flex border-b py-2">
                        <UserAvatar name={p} imageURL="idk" />
                        <p className="text-muted-foreground">
                            {p}
                        </p>
                    </div>
                ))
                }
            </div>

        </section >

    )
}