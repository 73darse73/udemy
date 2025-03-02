import { memo, FC } from "react";

type Props = {
    isMenuOpen: boolean;
    onClick: () => void;
}

export const Overlay: FC<Props> = memo(({ isMenuOpen, onClick }) => {
    return (
        <div 
            className={`
                fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden
                ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
            `}
            onClick={onClick}
        />
    )
});