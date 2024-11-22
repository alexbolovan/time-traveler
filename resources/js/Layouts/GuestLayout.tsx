import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link} from '@inertiajs/react';
import {PropsWithChildren} from 'react';
import NavBar from "@/Pages/Partials/NavBar";

export default function Guest({children}: PropsWithChildren) {
    return (
        <>
            <NavBar
                auth={false}
            />

            <div>
                {children}
            </div>
        </>
    );
}


//<h1>Guest</h1>
//<Link
//    href={route('login')}
//    method="get"
//> Sign in</Link>
