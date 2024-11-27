import {PageProps} from "@/types";
import {useState} from "react";

function Bubble({children}: PageProps) {
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


    return (
        <div className="flex ml-6 space-x-4 pb-2">
            <Bubble>
                👍 {like_count}
            </Bubble>
            <Bubble>
                👎 {dislike_count}
            </Bubble>
            <Bubble>
                🤯 {amazed_count}
            </Bubble>
            <Bubble>
                🤡 {clown_count}
            </Bubble>
        </div>
    );
}
