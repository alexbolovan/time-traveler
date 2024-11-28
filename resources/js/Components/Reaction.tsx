import {PageProps} from "@/types";
import {useState} from "react";
import {Inertia} from "@inertiajs/inertia";

export default function Reaction({
                                     post_id,
                                     like_count,
                                     dislike_count,
                                     amazed_count,
                                     clown_count,
                                     curr_reaction,
                                 }: PageProps<{
    post_id: number;
    like_count: number;
    dislike_count: number;
    amazed_count: number;
    clown_count: number;
    curr_reaction: string | null;
}>) {
    // Initialize reactions based on the current reaction
    const [toggle, setToggle] = useState({
        like: curr_reaction === "like",
        dislike: curr_reaction === "dislike",
        amazed: curr_reaction === "amazed",
        clown: curr_reaction === "clown",
    });

    // Local state for counts
    const [counts, setCounts] = useState({
        like: like_count,
        dislike: dislike_count,
        amazed: amazed_count,
        clown: clown_count,
    });



return (
    <div className="flex ml-6 space-x-4 pb-2">
            <span
                className={`inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium ${
                    toggle.like ? "bg-green-500" : "text-white ring-2 ring-inset ring-gray-200"
                }`}
                onClick={(e) => {
                    handleToggle("like");
                    e.stopPropagation();
                }}
            >
                👍 {curr_reaction} {counts.like}
            </span>
        <span
            className={`inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium ${
                toggle.dislike ? "bg-red-500" : "text-white ring-2 ring-inset ring-gray-200"
            }`}
            onClick={(e) => {
                handleToggle("dislike");
                e.stopPropagation();
            }}
        >
                👎 {counts.dislike}
            </span>
        <span
            className={`inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium ${
                toggle.amazed ? "bg-yellow-500" : "text-white ring-2 ring-inset ring-gray-200"
            }`}
            onClick={(e) => {
                handleToggle("amazed");
                e.stopPropagation();
            }}
        >
                🤯 {counts.amazed}
            </span>
        <span
            className={`inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium ${
                toggle.clown ? "bg-blue-500" : "text-white ring-2 ring-inset ring-gray-200"
            }`}
            onClick={(e) => {
                handleToggle("clown");
                e.stopPropagation();
            }}
        >
                🤡 {counts.clown}
            </span>
    </div>
);
}
