import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';
import NavBar from "@/Pages/Partials/NavBar";

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
        <div className="max-w-7xl mx-auto justify-center items-center h-screen">
            <div className="fixed top-0 left-0 w-full bg-black">
                <NavBar/>
            </div>

            <div className="mt-16">
                {children}
            </div>
        </div>

    );
}
