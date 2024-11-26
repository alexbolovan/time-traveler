import {PageProps} from '@/types';
import Paginate from '@/Components/Paginate';

import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import SideBar from "@/Pages/Partials/SideBar";
import NavBar from "@/Pages/Partials/NavBar";
import NavLink from "@/Components/NavLink";
import Logo from "@/Components/Logo";
import {Link, usePage} from '@inertiajs/react';
import Tags from "@/Components/Tags";

export default function predictions({auth, predictions}: PageProps<{ auth: boolean; predictions: any }>) {
    const RenderedComponent = auth ? Authenticated : Guest;

    return (
        <RenderedComponent>
            {/* Body goes here */}
            {/* We do not render any navigation, but the posts here */}
            <div className="flex flex-col space-y-4">
                {/* ERROR: Link inside link here is invalid (error show up as <a> inside <a>) */}
                {predictions.data.map((item: any, index: number) => (
                    <Link href={route('predictions.show', index + 1)}>
                        <div className="overflow-hidden rounded-lg bg-transparent shadow border border-white pt-3">
                            <Tags/>
                            <div className="px-4 sm:px-6">
                                <p className="text-2xl mb-1">{item.title}</p>
                                <p className="text-sm text-gray-500">{item.user.name}</p>
                            </div>
                            <div className="px-4 pb-2 sm:p-6">{item.body}</div>
                        </div>
                    </Link>
                ))}

                {/* TODO: Impl better pagination */
                }
                <Paginate
                    currentPage={predictions.current_page}
                    lastPage={predictions.last_page}
                    links={predictions.links}
                />
            </div>
        </RenderedComponent>
    )
        ;
}
