type ItemObject = {
    name: string;
    price: number;
}

export default function ReceiptItem({ name, price }: ItemObject) {
    return (
        <div className="flex justify-between border-b p-4">
            <span> {name} </span>
            <span>${price.toFixed(2)}</span>
        </div>
    )
}