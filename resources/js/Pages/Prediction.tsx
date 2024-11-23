import {PageProps} from "@/types";
import predictions from "@/Pages/Predictions";

export default function Prediction({auth, prediction, id} : PageProps<{auth: boolean, predictions: any, id: number}> ){

    return (
        <>
            <div>
                {prediction.map((item : any, index : number) => (
                    <div key={index}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                ))}


                <h1>Title</h1>
                <p>Body</p>
            </div>
            <ul>
                <li>
                    <div>
                        <p>Comment 1</p>
                    </div>
                </li>

            </ul>
        </>
    )
}
