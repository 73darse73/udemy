import { useCallback } from "react";

type MessageType = "success" | "error";

export const useMessage = () => {
    const showMessage = useCallback((type: MessageType, message: string) => {
        console.log("showMessage");
        switch (type) {
            case "success":
                alert(message);  // 後でトースト通知に変更予定
                break;
            case "error":
                alert(message);  // 後でトースト通知に変更予定
                break;
            default:
                break;
        }
    }, []);

    return { showMessage };
}; 