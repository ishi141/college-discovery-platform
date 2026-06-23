"use client";

import { FaSearch } from "react-icons/fa";

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchBar({
    value,
    onChange,
}: Props) {
    return (
        <div className="relative mb-8">

            <FaSearch
                className="absolute top-5 left-5 text-gray-400"
            />

            <input
                type="text"
                placeholder="Search colleges..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full border rounded-xl py-4 pl-14 pr-4 shadow-md"
            />

        </div>
    );
}