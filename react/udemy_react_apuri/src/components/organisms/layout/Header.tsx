import { memo, FC, useState } from "react";
import { Link } from "react-router-dom";

import { MenuButton } from "../../atoms/button/MenuButton";
import { Overlay } from "../../atoms/other/Overlay";
import { SlideMenu } from "../navigation/Slidemenu";

export const Header: FC = memo(() => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 flex justify-between items-center h-16 bg-teal-500 px-4 md:px-8 gap-4 z-50">
                <div className="flex items-center gap-4">
                    <Link to="/">
                        <h1 className="font-bold text-white text-lg md:text-xl">ユーザー管理アプリ</h1>
                    </Link>
                    <nav className="hidden md:flex items-center gap-4">
                        <Link to="/home/user_management">
                            <p className="text-white">ユーザー一覧</p>
                        </Link>
                        <Link to="/home/setting">
                            <p className="text-white">設定</p>
                        </Link>
                    </nav>
                </div>
                <MenuButton isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </header>

            <Overlay isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
            <SlideMenu isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />

        </>
    )
});