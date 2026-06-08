import { UserAvatar } from "@/components/userAvatar";

export default function UsersList() {
    const participants = ["Hello", "World"];

    return (
        <section className="rounded-lg border p-4">
            <h2 className="font-semibold mb-4">
                Participants
            </h2>

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