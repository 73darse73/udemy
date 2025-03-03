import { FC, memo } from "react";

type Props = {
    imageUrl: string;
    userName: string;
    fullName: string;
    onClick: () => void;
}

export const UserCard: FC<Props> = memo(({ imageUrl, userName, fullName, onClick }) => {
    return (
        <div 
            className="bg-white w-72 shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={onClick}
        >
            <div className="w-[160px] h-[160px] mx-auto">
                <img src={imageUrl} alt="" className="rounded-full" />
            </div>
            <div className="text-center pt-4">
                <p className="text-lg font-bold">{userName}</p>
                <p className="text-sm text-gray-500">{fullName}</p>
            </div>
        </div>
    );
});