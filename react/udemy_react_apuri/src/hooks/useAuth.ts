import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
    const { setLoginUser } = useLoginUser();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { showMessage } = useMessage();
    const login = useCallback((id: string) => {
        setLoading(true);
        axios
            .get<User[]>(`https://jsonplaceholder.typicode.com/users?id=${id}`)
            .then((res) => {
                if (res.data.length > 0) {
                    setLoginUser({ ...res.data[0], isAdmin: res.data[0].id === 10 ? true : false });
                    navigate("/home");
                    showMessage("success", "ログインしました");
                } else {
                    showMessage("error", "ユーザーが見つかりません");
                    throw new Error();
                }
            })
            .catch(() => {
                showMessage("error", "ログインできません");
                throw new Error();
            })
            .finally(() => {
                setLoading(false);
            });
    }, [navigate, showMessage, setLoginUser]);

    return { login, loading };
}