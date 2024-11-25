import {PageProps} from '@/types';
import Paginate from '@/Components/Paginate';

import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import SideBar from "@/Pages/Partials/SideBar";
import NavBar from "@/Pages/Partials/NavBar";
import NavLink from "@/Components/NavLink";
import Logo from "@/Components/Logo";
import {Link, usePage} from '@inertiajs/react';

export default function predictions({auth, predictions}: PageProps<{ auth: boolean; predictions: any }>) {
    const RenderedComponent = auth ? Authenticated : Guest;

    return (
        <RenderedComponent>
            {/* Body goes here */}
            {/* We do not render any navigation, but the posts here */}
            <div className="flex flex-col space-y-4">

                {predictions.data.map((item: any, index: number) => (
                    <Link href={route('predictions.show', index + 1)}>
                        <div className="flex flex-col space-y-3 border border-white rounded-md p-2" key={index}>
                            <div className="flex flex-col">
                                <h1 className="text-2xl">{item.title}</h1>
                                <Link className="hover:underline" href={route('predictions.show', index + 2)}>{item.user.name}</Link>
                            </div>
                            <p>{item.body}</p>
                        </div>
                    </Link>
                ))}

                {/* TODO: Impl better pagination */}
                <Paginate
                    currentPage={predictions.current_page}
                    lastPage={predictions.last_page}
                    links={predictions.links}
                />
            </div>
        </RenderedComponent>
    );
}
