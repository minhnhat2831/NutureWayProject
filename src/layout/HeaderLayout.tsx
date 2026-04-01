import { Icons } from "@/components/common/Icons";
import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router";

interface HeaderProps {
    showBack?: boolean
    title?: string
    titleAlign?: 'left' | 'center' | 'right'

    showSearch?: boolean
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    onSearchClear?: () => void;
    searchPlaceholder?: string;
    onClickSearch? : () => void

    iconR1?: ReactNode
    iconR2?: ReactNode
    iconL1?: ReactNode
    iconL2?: ReactNode
    onClickIconR1?: () => void
    onClickIconR2?: () => void
    onClickIconL1?: () => void
    onClickIconL2?: () => void
}


interface IconSlotProps {
    icon: ReactNode;
    onClick?: () => void;
}

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    onClear: () => void;
    placeholder?: string;
    onClickSearch? : () => void
}

const alignClass: Record<NonNullable<HeaderProps["titleAlign"]>, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
};

function IconSlot({ icon, onClick }: IconSlotProps) {
    return (
        <button
            type="button"
            className="shrink-0 flex items-center justify-center cursor-pointer"
            onClick={onClick}
        >
            {icon}
        </button>
    );
}

export const SearchBar = ({
    value,
    onChange,
    onClear,
    onClickSearch,
    placeholder = "Search...",
}: SearchBarProps) => {
    return (
        <div className="flex items-center gap-2 bg-[#ebe8e8] rounded-2xl h-10 px-3">
            <span className="shrink-0 text-gray-500">
                <Icons.searchIcon />
            </span>

            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onClick={onClickSearch}
                placeholder={placeholder}
                className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
            />

            {value.length > 0 && (
                <button
                    type="button"
                    className="shrink-0 text-gray-400"
                    onClick={onClear}
                >
                    <Icons.closeButtonIcon />
                </button>
            )}
        </div>
    );
}

export default function Header({
    showBack = false,
    title,
    titleAlign = 'left',
    showSearch = false,
    searchValue,
    onSearchChange,
    onSearchClear,
    searchPlaceholder = 'Search...',
    onClickSearch,
    iconR1,
    iconR2,
    iconL1,
    iconL2,
    onClickIconR1,
    onClickIconR2,
    onClickIconL1,
    onClickIconL2
}: HeaderProps) {
    const nav = useNavigate();

    const [internalSearch, setInternalSearch] = useState("");
    const isControlled = searchValue !== undefined;
    const searchQuery = isControlled ? searchValue : internalSearch;

    function handleSearchChange(val: string) {
        if (!isControlled) setInternalSearch(val);
        onSearchChange?.(val);
    }

    function handleSearchClear() {
        if (!isControlled) setInternalSearch("");
        onSearchClear?.();
    }

    const hasLeftIcons = showBack || iconL1 || iconL2;
    const hasRightIcons = iconR1 || iconR2;
    return (
        <header className="bg-white py-3 px-4 flex flex-col gap-2 z-20">
            <div className="flex flex-row justify-between items-center gap-2">
                {hasLeftIcons && (
                    <div className="flex flex-row items-center gap-2 shrink-0">
                        {showBack && (
                            <IconSlot
                                icon={<Icons.arrowLeftIcon />}
                                onClick={() => nav(-1)}
                            />
                        )}
                        {iconL1 && <IconSlot icon={iconL1} onClick={onClickIconL1} />}
                        {iconL2 && <IconSlot icon={iconL2} onClick={onClickIconL2} />}
                    </div>
                )}

                {showSearch && !title && (
                    <div className="flex-1">
                        <SearchBar
                            onClickSearch={onClickSearch}
                            value={searchQuery}
                            onChange={handleSearchChange}
                            onClear={handleSearchClear}
                            placeholder={searchPlaceholder}
                        />
                    </div>
                )}

                {title && (
                    <p
                        className={`flex-1 font-bold text-2xl font-serif ${alignClass[titleAlign]}`}
                    >
                        {title}
                    </p>
                )}

                {hasRightIcons && (
                    <div className="flex flex-row items-center gap-2 shrink-0">
                        
                        {iconR1 && <IconSlot icon={iconR1} onClick={onClickIconR1} />}
                        {iconR2 && <IconSlot icon={iconR2} onClick={onClickIconR2} />}
                    </div>
                )}
            </div>

            {showSearch && title && (
                <SearchBar
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onClear={handleSearchClear}
                    placeholder={searchPlaceholder}
                />
            )}
        </header>
    );
}