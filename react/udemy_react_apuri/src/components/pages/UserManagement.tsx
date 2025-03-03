import { memo, FC, useEffect, useState, useCallback } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useAllUsers } from "../../hooks/useAllUsers";
import { User } from "../../types/api/user";

export const UserManagement: FC = memo(() => {
    const { getUsers, loading, users } = useAllUsers();
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onClickUser = useCallback((user: User) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <>
            <p className="text-2xl font-bold">ユーザー一覧</p>
            <div className="p-4 md:p-8 flex flex-wrap justify-center gap-4">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    users.map((user) => (
                        <UserCard 
                            key={user.id}
                            imageUrl="https://placehold.jp/600x600.png" 
                            userName={user.username} 
                            fullName={user.name}
                            onClick={() => onClickUser(user)}
                        />
                    ))
                )}
            </div>
            <UserDetailModal 
                user={selectedUser}
                isOpen={isModalOpen}
                onClose={onCloseModal}
            />
        </>
    )
});
