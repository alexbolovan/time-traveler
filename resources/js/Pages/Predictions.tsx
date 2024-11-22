import { PageProps } from '@/types';
import Paginate from '@/Components/Paginate';

import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import SideBar from "@/Pages/Partials/SideBar";
import NavBar from "@/Pages/Partials/NavBar";

export default function predictions({ auth, predictions }: PageProps<{ auth: boolean; predictions: any }>) {
    const RenderedComponent = auth ? Authenticated : Guest;

    return (
        <RenderedComponent>

            {/* Main Layout */}
            <div className="flex min-h-screen">
                {/* Fixed Sidebar */}
                <aside className="fixed top-0 left-0 h-screen w-64 bg-transparent text-white shadow-lg">
                    <SideBar />
                </aside>

                {/* Main Content */}
                <div className="flex-1 ml-64 bg-transparent">
                    {/* Predictions Content */}
                    <div className="flex flex-col items-center p-6">
                        {predictions.data.map((item: any, index: number) => (
                            <div
                                key={index}
                                className="w-3/4 max-w-2xl p-6 bg-transparent shadow-lg rounded-lg mb-4 border border-white"
                                // TODO: make it that onlick routes to the corresponding post
                                onClick={() => console.log("hello")}
                            >
                                <h2 className="text-2xl font-bold text-left">{item.title}</h2>

                                <p /*onclick should route to the corresponding users page*/ className="text-gray-700 text-left">{item.user.name}</p>
                                <p className="text-gray-700 text-left">{item.body}</p>
                            </div>
                        ))}
                    </div>

                    {/* TODO: Impl better pagination */}
                    <div className="mt-auto p-4 bg-transparent">
                        <Paginate
                            currentPage={predictions.current_page}
                            lastPage={predictions.last_page}
                            links={predictions.links}
                        />
                    </div>
                </div>
            </div>
        </RenderedComponent>
    );
}
