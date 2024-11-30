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
                    />
                </div>

                {/* Filter options */}
                <div className="py-4">
                    <PredictionCommentDropdown/>
                </div>

                {/* Comments Section */}
                <div className="flex flex-col space-y-6">
                    {comments.comments.map((comment: any, index: number) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg bg-transparent shadow border border-white pb-1"
                        >
                            <div className="px-4 pb-2 sm:p-6">{comment.body}</div>
                            <Reaction/>
                        </div>
                    ))}
                </div>
            </div>
        </RenderedComponent>
    )
}


