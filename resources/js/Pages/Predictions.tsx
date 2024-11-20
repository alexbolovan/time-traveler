import {PageProps} from '@/types';
import Paginate from '@/Components/Paginate';

export default function predictions({predictions}: PageProps<{ predictions: any }>) {
    return (
        <>
            <h1 className="text-8xl">Predictions</h1>
            {predictions.map((item: any, index: int) => (
                <li key={index}>
                    <h2 className="text-2xl">{item.prediction.title}</h2>
                    <p>{item.prediction.body}</p>
                </li>
            ))}

        <Paginate></Paginate>


        </>
    )
}
