import {PageProps} from '@/types'; import Paginate from '@/Components/Paginate';

import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import SideBar from "@/Pages/Partials/SideBar";
import NavBar from "@/Pages/Partials/NavBar";
import NavLink from "@/Components/NavLink";
import Logo from "@/Components/Logo";
import {Link, usePage} from '@inertiajs/react';
import Tags from "@/Components/Tags";
import Reaction from "@/Components/Reaction";
import {Inertia} from "@inertiajs/inertia";

export default function predictions({auth, predictions}: PageProps<{ auth: boolean; predictions: any }>) {
    const RenderedComponent = auth ? Authenticated : Guest;

    const LoadPost = (post_id : number) => {
        console.log(post_id);
        Inertia.visit(route('predictions.show', {id: post_id}));
    }

    return (
    <RenderedComponent>
        {/* Body goes here */}
        {/* We do not render any navigation, but the posts here */}
        <div className="flex flex-col space-y-4 max-w-screen-lg mx-auto overflow-x-hidden">
            {/* ERROR: Link inside link here is invalid (error show up as <a> inside <a>) */}
            {predictions.data.map((item: any, index: number) => (
                //<Link href={route('predictions.show', index + 1)}>
                <div className="overflow-hidden rounded-lg bg-transparent shadow border border-white pt-3 pb-1 hover:cursor-pointer"
                     onClick={() => LoadPost(item.id)} key={index}>
                    <Tags/>
                    <div className="px-4 sm:px-6">
                        <p className="text-2xl mb-1">{item.title}</p>
                        <p className="text-sm hover:underline">{item.user.name}</p>
                    </div>
                    <div className="px-4 pb-2 sm:p-6">{item.body}</div>
                    <Reaction
                        post_id={item.id}
                        user_id={item.reactions[0] ? item.reactions[0].user_id : -1}
                        like_count={item.like_count}
                        dislike_count={item.dislike_count}
                        amazed_count={item.amazed_count}
                        clown_count={item.clown_count}
                        curr_reaction={item.has_reacted > 0 ? item.reactions[0].reaction_type : "none"}
                        type="Prediction"
                        auth={auth}
                    />
                    {/* there should never be more than 1, but just in case we just grab the first one */}
                </div>
                //</Link>
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
