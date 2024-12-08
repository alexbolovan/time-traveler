import {PageProps} from "@/types";

export default function User({profile} : PageProps<{profile : any}>) {

    return (
        <>
            <p>{profile.name}</p>
        </>
    )
}
