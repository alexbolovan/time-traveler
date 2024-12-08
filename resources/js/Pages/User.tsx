import {PageProps} from "@/types";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";

export default function User({profile}: PageProps<{ profile: any }>) {

    const RenderedComponent = Authenticated; //auth ? Authenticated : Guest;

    return (
        <>
            <RenderedComponent>
                <p>{profile.name}</p>
                <p>Total Score: {profile.predictions_reactions_count + profile.comments_reactions_count}</p>
                <p>Prediction Score: {profile.predictions_reactions_count}</p>
                <p>Comment Score: {profile.comments_reactions_count}</p>
                <p>{profile.created_at}</p>
                {profile.interactions.map((interaction: any, index: number) => (
                    <div className="flex flex-col space-y-8" key={index}>
                        {interaction.type === "prediction" ?
                            <>
                                <p>{interaction.title}</p>
                                <p>{interaction.body}</p>
                            </>
                            :
                            <div>
                                <p>{interaction.body}</p>
                            </div>
                        }
                    </div>
                ))}


            </RenderedComponent>
        </>
    );
}
