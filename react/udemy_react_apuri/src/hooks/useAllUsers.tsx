import axios from "axios";
import { useCallback, useState } from "react";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
    const { showMessage } = useMessage();

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<User[]>([]);

    const getUsers = useCallback(() => {
        setLoading(true);
        axios
            .get<User[]>("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
            .catch(() => {
                showMessage("error", "ユーザー取得に失敗しました"); 
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { getUsers, loading, users };
}