import { Input } from "@/components/basics/input"
type ItemObject = {
    name: string;
    price: number;
    onChange: (field: string, value: string | number) => void;
};

export default function ReceiptItem({ name, price, onChange }: ItemObject) {
    return (
        <div className="flex justify-between border-b p-4">
            <span>
                <Input
                    type="text"
                    className="border rounded-md p-2"
                    placeholder="Item name"
                    value={name}
                    onChange={(event) => onChange("name", event.target.value)} />
            </span>
            <span>${price.toFixed(2)}</span>
        </div>
    )
}