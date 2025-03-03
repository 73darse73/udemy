import { memo, FC, useState, ChangeEvent } from "react";
import { User } from "../../../types/api/user";
import { useLoginUser } from "../../../hooks/useLoginUser";

type Props = {
    user: User | null;
    isOpen: boolean;
    onClose: () => void;
}

export const UserDetailModal: FC<Props> = memo(({ user, isOpen, onClose }) => {
    const { loginUser } = useLoginUser();
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

    const onClickUpdate = () => {
        // 更新処理
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl z-50 w-full max-w-md">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    ✕
                </button>
                {user && (
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold">{user.name}</h2>
                        <div className="space-y-3">
                            <div>
                                <p className="font-semibold mb-1">Username</p>
                                {loginUser?.isAdmin ? (
                                    <input
                                        value={username}
                                        onChange={onChangeUserName}
                                        className="w-full p-2 border rounded"
                                    />
                                ) : (
                                    <p>{user.username}</p>
                                )}
                            </div>
                            <div>
                                <p className="font-semibold mb-1">Name</p>
                                {loginUser?.isAdmin ? (
                                    <input
                                        value={name}
                                        onChange={onChangeName}
                                        className="w-full p-2 border rounded"
                                    />
                                ) : (
                                    <p>{user.name}</p>
                                )}
                            </div>
                            <div>
                                <p className="font-semibold mb-1">Email</p>
                                {loginUser?.isAdmin ? (
                                    <input
                                        value={email}
                                        onChange={onChangeEmail}
                                        className="w-full p-2 border rounded"
                                    />
                                ) : (
                                    <p>{user.email}</p>
                                )}
                            </div>
                            <p><span className="font-semibold">Phone:</span> {user.phone}</p>
                            <p><span className="font-semibold">Website:</span> {user.website}</p>
                            <p><span className="font-semibold">Company:</span> {user.company.name}</p>
                            <p><span className="font-semibold">Address:</span> {user.address.city}</p>
                        </div>
                        {loginUser?.isAdmin && (
                            <button 
                                onClick={onClickUpdate}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            >
                                更新
                            </button>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}); 