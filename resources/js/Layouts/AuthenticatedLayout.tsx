import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import {Link, usePage} from '@inertiajs/react';
import {PropsWithChildren, ReactNode, useState} from 'react';
import NavBar from "@/Pages/Partials/NavBar";
import SideBar from "@/Pages/Partials/SideBar";

export default function Authenticated({
                                          header,
                                          children,
                                      }: PropsWithChildren<{ header?: ReactNode }>) {
    // used to access information about user
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        // add banner at the top here for authenticated user
        <div className="flex  max-w-7xl mx-auto h-screen">
            {/* Fixed Navbar */}
            <div className="fixed top-0 left-0 w-full bg-black z-10">
                <NavBar/>
            </div>
            <div className="flex h-screen">
                {/* Sidebar */}
                <div className="w-64 fixed top-0 left-0 h-full bg-black text-white z-20 hidden md:block">
                    <SideBar/>
                </div>

                {/* Main Content */}
                <div
                    className={`flex-1 p-4 max-w-4xl mx-auto
                md:ml-64
                flex items-center justify-center
                md:items-start md:justify-start`}
                >
                    <div className="mt-16 md:mt-0">{children}</div>
                </div>
            </div>

        </div>

    );
}
