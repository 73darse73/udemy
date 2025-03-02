import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { User } from "../types/api/user";

export const useAuth = () => {
    
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    const login = useCallback((id: string) => {
        setLoading(true);
        axios
            .get<User[]>(`https://jsonplaceholder.typicode.com/users?id=${id}`)
            .then((res) => {
                if (res.data.length > 0) {
                    navigate("/home");
                } else {
                    alert("ユーザーが見つかりません");
                    throw new Error();
                }
            })
            .catch(() => {
                alert("ログインできません");
                throw new Error();
            })
            .finally(() => {
                setLoading(false);
            });
    }, [navigate]);

    return { login, loading };
}