import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type UserAvatarItems = {
    name: string;
    imageURL?: string;
};

export function UserAvatar({ name, imageURL }: UserAvatarItems) {
    return (
        <Avatar>
            <AvatarImage src={imageURL} />
            <AvatarFallback>
                {name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
        </Avatar>
    );
}