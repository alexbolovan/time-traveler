import {PageProps} from "@/types";
import {useState} from "react";
import {Inertia} from "@inertiajs/inertia";

function Bubble({children}: PageProps<{ children: any }>) {
    return (
        <span
            className="inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium text-white ring-2 ring-inset ring-gray-200"
            onClick={(e) => {
                console.log("Like")
                e.stopPropagation();
            }}>
            {children}
    </span>

    );

}


export default function Reaction({like_count, dislike_count, amazed_count, clown_count}: PageProps<{
    like_count: number,
    dislike_count: number,
    amazed_count: number,
    clown_count: number
}>) {

    const [toggle, setToggle] = useState({
        like: false,
        dislike: false,
        amazed: false,
        clown: false
    });
    const handleToggle = (reaction: string) => {
        setToggle({
            like: reaction === 'like',
            dislike: reaction === 'dislike',
            amazed: reaction === 'amazed',
            clown: reaction === 'clown',
        });
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
                👍 {like_count}
            </span>
            <span
                className="inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium text-white ring-2 ring-inset ring-gray-200"
                onClick={(e) => {
                    handleToggle('dislike');
                    console.log(toggle)
                    e.stopPropagation();
                }}>
                👎 {dislike_count}
            </span>
            <span
                className="inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium text-white ring-2 ring-inset ring-gray-200"
                onClick={(e) => {
                    handleToggle('amazed');
                    console.log(toggle)
                    e.stopPropagation();
                }}>
                🤯 {amazed_count}
            </span>
            <span
                className="inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium text-white ring-2 ring-inset ring-gray-200"
                onClick={(e) => {
                    handleToggle('clown');
                    console.log(toggle)
                    e.stopPropagation();
                }}>
                🤡 {clown_count}
            </span>
        </div>
    );
}
