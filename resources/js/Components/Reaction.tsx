import {PageProps} from "@/types";
import {useEffect, useState} from "react";
import {Inertia} from "@inertiajs/inertia";


export default function Reaction({like_count, dislike_count, amazed_count, clown_count, curr_reaction}: PageProps<{
    like_count: number,
    dislike_count: number,
    amazed_count: number,
    clown_count: number,
    curr_reaction: string
}>) {


    let reactions = {
        like: curr_reaction == 'like',
        dislike: curr_reaction == 'dislike',
        amazed: curr_reaction == 'amazed',
        clown: curr_reaction == 'clown',
    }

    // as per comment below set these dynamically based on current status of db regarding if the user has made a reaction to certain prediction
    const [toggle, setToggle] = useState({reactions});


    const handleToggle = (reaction: string) => {
        console.log(curr_reaction);
        const updatedToggle = {
            like: reaction === 'like' ? !toggle.like : false,
            dislike: reaction === 'dislike' ? !toggle.dislike : false,
            amazed: reaction === 'amazed' ? !toggle.amazed : false,
            clown: reaction === 'clown' ? !toggle.clown : false,
        };

        setToggle(updatedToggle);

        // Use the updated value immediately
        Inertia.post(route('reactions.update', updatedToggle));

    };


    return (
        <div className="flex ml-6 space-x-4 pb-2">
        <span
            className="inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium text-white ring-2 ring-inset ring-gray-200"
            onClick={(e) => {
                handleToggle('like');
                console.log(toggle)
                e.stopPropagation();
            }}>
                👍 {like_count + (toggle.like ? 1 : 0)}
            </span>
            <span
                className="inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium text-white ring-2 ring-inset ring-gray-200"
                onClick={(e) => {
                    handleToggle('dislike');
                    console.log(toggle)
                    e.stopPropagation();
                }}>
                👎 {dislike_count + (toggle.dislike ? 1 : 0)}
            </span>
            <span
                className="inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium text-white ring-2 ring-inset ring-gray-200"
                onClick={(e) => {
                    handleToggle('amazed');
                    console.log(toggle)
                    e.stopPropagation();
                }}>
                🤯 {amazed_count + (toggle.amazed ? 1 : 0)}
            </span>
            <span
                className="inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium text-white ring-2 ring-inset ring-gray-200"
                onClick={(e) => {
                    handleToggle('clown');
                    console.log(toggle)
                    e.stopPropagation();
                }}>
                🤡 {clown_count + (toggle.clown ? 1 : 0)}
            </span>
        </div>
    );
}
