import {PageProps} from "@/types";
import predictions from "@/Pages/Predictions";

export default function Prediction({auth, prediction, id}: PageProps<{ auth: boolean, prediction: any, id: number }>) {

    return (
        <>
            <h1>{prediction.title}</h1>
            <p>{prediction.name}</p>
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
