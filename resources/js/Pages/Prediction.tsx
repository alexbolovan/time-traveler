import {PageProps} from "@/types";
import predictions from "@/Pages/Predictions";

export default function Prediction({auth, prediction, id}: PageProps<{ auth: boolean, prediction: any, id: number }>) {

    return (
        <>
            <div className="flex-col space-y-2 pb-6">
                <h1><pre>Title </pre> {prediction.title}</h1>
                <p><pre>Body </pre> {prediction.body}</p>
            </div>

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
        </>
    )
}
