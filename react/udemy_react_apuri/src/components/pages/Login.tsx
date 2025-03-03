import { memo, FC, useState } from "react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: FC = memo(() => {
    const [userId, setUserId] = useState("");
    const { login, loading } = useAuth();

    const onClickLogin = () => {
        login(userId);
    }

    const onChangeUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value);
    }

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-md p-8 rounded-md shadow-md">
            <h1 className="text-2xl font-bold text-center pb-4 border-b border-gray-300 mb-8">ユーザー管理アプリ</h1>
            <form className="max-w-xs mx-auto">
                <label htmlFor="user_id" className="block mb-2">ユーザーID</label>
                <input type="text" id="user_id" placeholder="例：test@example.com" value={userId} onChange={onChangeUserId} className="block w-full rounded-md border border-gray-300 py-2 px-4 focus:border-indigo-500 focus:ring focus:ring-indigo-400 focus:ring-opacity-50" />
                <PrimaryButton onClick={onClickLogin} disabled={userId === ""} loading={loading}>ログイン</PrimaryButton>
            </form>
        </div>
    )
});