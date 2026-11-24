"use client"
import ReceiptItem from "@/components/reciept/ReceiptItem"
import { useState } from "react"

export default function EntireReceipt() {
    const [items, setItems] = useState([{ id: 1, name: "example", price: 4.99 }]);
    const updateItem = (id: number, field: string, value: string | number) => {
        setItems((prevItems) => prevItems.map((item) => item.id === id ? { ...item, [field]: value } : item));
    };

    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">
                The Receipt
            </h2>

            <div className="rounded-xl border">
                {items.map((item) => (
                    <div key={item.id}>
                        <ReceiptItem key={item.id} name={item.name} price={item.price} onChange={(field, value) => updateItem(item.id, field, value)} />
                    </div>
                ))
                }
            </div>

        </section>
    )
}
