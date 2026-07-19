import Navbar from "@/components/basicsupdated/Navbar"
import UsersList from "@/components/reciept/UsersList"
import ItemsList from "@/components/reciept/ItemsList"

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <div className="flex min-h-screen">
        <aside className="w-1/4 border-r p-4">
          <UsersList />
        </aside>

        <section className="w-3/4 flex flex-col p-6 gap-6">
          <ItemsList />
        </section>
      </div>

    </main>
  );
}


