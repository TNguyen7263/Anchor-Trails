import ReceiptItem from "@/components/reciept/ReceiptItem"


export default function ItemsList() {
    const items = [
        { name: "test", price: 4.99 },
        { name: "more", price: 10.99 }
    ];

    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">
                Items on the Receipt
            </h2>

            <div className="rounded-xl border">
                {items.map((item) => (
                    <div key={item.name}>
                        <ReceiptItem name={item.name} price={item.price} />
                    </div>
                ))
                }
            </div>

        </section>
    )
}
