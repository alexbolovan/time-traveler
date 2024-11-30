import {PageProps} from "@/types";
import predictions from "@/Pages/Predictions";
import Tags from "@/Components/Tags";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";

export default function Prediction({auth, prediction, id}: PageProps<{ auth: boolean, prediction: any, id: number }>) {
    const RenderedComponent = auth ? Authenticated : Guest;

    return (
        <RenderedComponent>
            {/* Prediction content*/}
            <div className="overflow-hidden rounded-lg bg-transparent shadow border border-white pt-3 pb-1">
                <Tags/>
                <div className="px-4 sm:px-6">
                    <p className="text-2xl mb-1">{prediction.title}</p>
                    <p className="text-sm hover:underline">{prediction.user.name}</p>
                </div>
                <div className="px-4 pb-2 sm:p-6">{prediction.body}</div>
            </div>

            {/* Filter options */}


                <div className="flex-col space-y-2 pb-6">
                    <h2 className="underline">Comments</h2>
                    <ul>
                        {prediction.comments.map((comment: string, index: number) => (
                            <div className="flex-col space-y-4">
                                {!comment.parent_id ?
                                    <li key={index}>
                                        <p>Comment: {comment.body}</p>
                                        {comment.comments.map((subcomment: string, index: number) => (
                                        <p>Subcomment: {subcomment.body}</p>
                                    ))}
                                </li>
                                : null
                            }

                        </div>
                    ))}
                </ul>
            </div>
        </RenderedComponent>
    )
}


