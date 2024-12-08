import {PageProps} from "@/types";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";

export default function User({profile}: PageProps<{ profile: any }>) {

    const RenderedComponent = Authenticated; //auth ? Authenticated : Guest;

    return (
        <>
            <RenderedComponent>
                <p>{profile.name}</p>
                <p>{profile.created_at}</p>


            </RenderedComponent>
        </>
    );
}
