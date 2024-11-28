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

    let reactions_states = {
        like: curr_reaction === "like",
        dislike: curr_reaction === "dislike",
        amazed: curr_reaction === "amazed",
        clown: curr_reaction === "clown",

    }


    // Initialize reactions based on the current reaction
    const [toggle, setToggle] = useState(reactions_states);
    const [curr, setCurr] = useState(curr_reaction); // Use state for curr

    const handleToggle = (reaction_type : string) => {
        // If the clicked reaction is already active, reset all reactions
        if (reaction_type === curr) {
            setCurr(null); // Clear the current reaction
            setToggle({
                like: false,
                dislike: false,
                amazed: false,
                clown: false,
            });
            return;
        }

        // Otherwise, set the new reaction
        setCurr(reaction_type);

        setToggle({
            like: reaction_type === "like",
            dislike: reaction_type === "dislike",
            amazed: reaction_type === "amazed",
            clown: reaction_type === "clown",
        });

    }



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
                👍 {like_count + (toggle.like ? 1 : 0)}
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
                👎 {dislike_count + (toggle.dislike ? 1 : 0)}
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
                🤯 {amazed_count + (toggle.amazed ? 1 : 0)}
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
                🤡 {clown_count  + (toggle.clown ? 1 : 0)}
            </span>
    </div>
);
}
