import { memo, FC } from "react";
import { Link } from "react-router-dom";

type Props = {
    isMenuOpen: boolean;
    onClick: () => void;
}

export const SlideMenu: FC<Props> = memo(({ isMenuOpen, onClick }) => {
    return (
        <nav 
            className={`
                fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-white transform transition-transform duration-300 md:hidden
                ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            `}
        >
            <div className="flex flex-col p-4 gap-4">
                <Link 
                    to="/home/user_management" 
                    onClick={onClick}
                    className="text-gray-700 hover:text-teal-500"
                >
                    ユーザー一覧
                </Link>
                <Link 
                    to="/home/setting"
                    onClick={onClick}
                    className="text-gray-700 hover:text-teal-500"
                >
                    設定
                </Link>
            </div>
        </nav>
    )
});