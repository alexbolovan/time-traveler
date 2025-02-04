import {PageProps} from "@/types";
import predictions from "@/Pages/Predictions";
import Tags from "@/Components/Tags";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import PredictionCommentDropdown from "@/Components/PredictionCommentDropdown";
import Reaction from "@/Components/Reaction";

export default function Prediction({auth, prediction, comments}: PageProps<{
    auth: boolean,
    prediction: any,
    comments: any
}>) {
    const RenderedComponent = auth ? Authenticated : Guest;

    return (
        <RenderedComponent>
            {auth ? <p>Hello world </p> : <p>Bye World!</p> }
            {/* Prediction content */}
            <div className="flex flex-col space-y-4 max-w-screen-lg mx-auto">
                {/* Post Section */}
                <div className="overflow-hidden rounded-lg bg-transparent shadow border border-white pt-3 pb-1">
                    <Tags/>
                    <div className="px-4 sm:px-6">
                        <p className="text-2xl mb-1">{prediction.title}</p>
                        <p className="text-sm hover:underline">{prediction.user.name}</p>
                    </div>
                    <div className="px-4 pb-2 sm:p-6">{prediction.body}</div>
                    <Reaction
                        post_id={prediction.id}
                        user_id={prediction.reactions[0] ? prediction.reactions[0].user_id : -1}
                        like_count={prediction.like_count}
                        dislike_count={prediction.dislike_count}
                        amazed_count={prediction.amazed_count}
                        clown_count={prediction.clown_count}
                        curr_reaction={prediction.has_reacted > 0 ? prediction.reactions[0].reaction_type : "none"}
                        type="Prediction"
                        auth={auth}
                    />
                </div>

                {/* Filter options */}
                <div className="py-4">
                    <PredictionCommentDropdown/>
                </div>

                {/* Comments Section */}
                <div className="flex flex-col space-y-6">
                    {comments.comments.map((comment: any, index: number) => (
                        <div className="space-y-4" key={index}>
                            {/* Parent comment container */}
                            <div className="overflow-hidden rounded-lg bg-transparent shadow border border-white pb-1">
                                <div className="text-sm px-4 pl-6 pt-3 pb-1">{comment.user.name}</div>
                                <div className="px-4 pl-6 pb-6">{comment.body}</div>
                                <Reaction
                                    post_id={comment.id}
                                    user_id={comment.reactions[0] ? comment.reactions[0].user_id : -1}
                                    like_count={comment.like_count}
                                    dislike_count={comment.dislike_count}
                                    amazed_count={comment.amazed_count}
                                    clown_count={comment.clown_count}
                                    curr_reaction={comment.has_reacted > 0 ? comment.reactions[0].reaction_type : "none"}
                                    type="Comment"

                                />
                            </div>

                            {/* Children comments container */}
                            {Object.keys(comment.children).length !== 0 ?
                                <div className="ml-8 pt-2 space-y-6">
                                    {comment.children.map((child: any, childIndex: number) => (
                                        <div
                                            key={childIndex}
                                            className="rounded-lg bg-transparent shadow border border-white"
                                        >
                                            <p className="text-sm px-4 pl-6 pt-3 pb-1">{child.user.name}</p>
                                            <p className="px-4 pl-6 pb-6">{child.body}</p>
                                            <Reaction
                                                post_id={child.id}
                                                user_id={child.reactions[0] ? child.reactions[0].user_id : -1}
                                                like_count={child.like_count}
                                                dislike_count={child.dislike_count}
                                                amazed_count={child.amazed_count}
                                                clown_count={child.clown_count}
                                                curr_reaction={child.has_reacted > 0 ? child.reactions[0].reaction_type : "none"}
                                                type="Comment"
                                            />
                                        </div>
                                    ))}
                                </div>
                                : null}
                        </div>
                    ))}
                </div>

            </div>
        </RenderedComponent>
    )
}


