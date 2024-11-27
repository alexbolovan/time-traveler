import {PageProps} from "@/types";
import {useState} from "react";

export default function Reaction({like_count, dislike_count, amazed_count, clown_count} : PageProps<{like_count : number, dislike_count : number, amazed_count : number, clown_count : number}>) {


    return (
        <div className="flex ml-6 space-x-4 pb-2">
            <span
                className="inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium text-white ring-2 ring-inset ring-gray-200">
                👍 {like_count}
            </span>
            <span className="inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium text-white ring-2 ring-inset ring-gray-200">
                👎 {dislike_count}
            </span>
            <span className="inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium text-white ring-2 ring-inset ring-gray-200">
                🤯 {amazed_count}
            </span>
            <span className="inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium text-white ring-2 ring-inset ring-gray-200">
                🤡 {clown_count}
            </span>
        </div>
    );
}
