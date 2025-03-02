import { memo, FC } from "react";

type Props = {
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
    children: React.ReactNode;
}

export const PrimaryButton: FC<Props> = memo(({ onClick, children, disabled, loading }) => {
    return (
        <button 
            type="button" 
            className="block w-full bg-indigo-500 text-white rounded-md py-2 mt-8 disabled:opacity-50 disabled:cursor-not-allowed" 
            onClick={onClick}
            disabled={disabled || loading}
        >
            {loading ? (
                <div className="flex justify-center items-center">
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                </div>
            ) : (
                children
            )}
        </button>
    )
});