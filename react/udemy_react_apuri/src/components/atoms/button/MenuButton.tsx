import { memo, FC } from "react";

type Props = {
    isMenuOpen: boolean;
    onClick: () => void;
}

export const MenuButton: FC<Props> = memo(({ isMenuOpen, onClick }) => {
    return (
        <button 
            type="button" 
            aria-label="メニューボタン"
            className="md:hidden cursor-pointer relative w-6 h-6"
            onClick={onClick}
        >
            <span className={`
                absolute w-6 h-1 left-0 bg-white transition-all duration-300
                ${isMenuOpen ? "rotate-45" : "top-0"}
            `}></span>
            <span className={`
                absolute top-1/2 -translate-y-1/2 left-0 w-6 h-1 bg-white transition-all duration-300
                ${isMenuOpen ? "opacity-0" : "opacity-100"}
            `}></span>
            <span className={`
                absolute w-6 h-1 left-0 bg-white transition-all duration-300
                ${isMenuOpen ? "-rotate-45" : "bottom-0"}
            `}></span>
        </button>
    )
});