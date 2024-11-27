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

    // as per comment below set these dynamically based on current status of db regarding if the user has made a reaction to certain prediction
    const [toggle, setToggle] = useState({
        like: false,
        dislike: false,
        amazed: false,
        clown: false
    });

    // TODO: fix this approach
    // the main issue is that one page reloads we will be free to toggle again even though its not in the database
    // we need to rethink this completely
    // just off my dome one approach would be to have to query the database first and determine whether and/or which reaction has been made
    // this will then set our item in the correct initial state and any modifications from then on would be in sync with the db
    // this should only be done upon initialization of the component
        // https://www.reddit.com/r/reactjs/comments/1ab8pj7/what_is_the_best_way_to_execute_a_piece_of_code/

    const handleToggle = (reaction: string) => {
        const updatedToggle = {
            like: reaction === 'like' ? !toggle.like : false,
            dislike: reaction === 'dislike' ? !toggle.dislike : false,
            amazed: reaction === 'amazed' ? !toggle.amazed : false,
            clown: reaction === 'clown' ? !toggle.clown : false,
        };

        setToggle(updatedToggle);

        // Use the updated value immediately
        Inertia.get(route('reactions.update', updatedToggle));

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
