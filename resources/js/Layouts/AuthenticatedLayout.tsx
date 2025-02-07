/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
'use client'

import {useState} from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
} from '@headlessui/react'
import {
    Bars3Icon,
    BellIcon,
    BugAntIcon,
    CalendarIcon,
    ChartPieIcon,
    ClockIcon,
    Cog6ToothIcon,
    CommandLineIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
    PlusCircleIcon,
    SparklesIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {ChevronDownIcon, MagnifyingGlassIcon} from '@heroicons/react/20/solid'
import {Link} from "@inertiajs/react";

const navigation = [
    {name: 'Home', href: '/predictions', icon: HomeIcon, current: false},
    {name: 'Popular', href: '#', icon: SparklesIcon, current: false},
    {name: 'New', href: '#', icon: ClockIcon, current: false},
    {name: 'New Post', href: '/predictions/create', icon: PlusCircleIcon, current: false}
]
const recent = [
    //{id: 1, name: 'Recent 1', href: '#', initial: 'T1', current: false},
    //{id: 2, name: 'Recent 2', href: '#', initial: 'T2', current: false},
    //{id: 3, name: 'Recent 3', href: '#', initial: 'T3', current: false},
]

const extra = [
    {name: 'About', href: '#', icon: QuestionMarkCircleIcon, current: false},
    {name: 'Report Bug', href: '#', icon: BugAntIcon, current: false},
    {name: 'Github', href: 'https://github.com/Axlx16/time-traveler', icon: CommandLineIcon, current: false, target : '_target'},
]


const userNavigation = [
    {name: 'Your profile', href: '#', method: 'get'},
    {name: 'Sign out', href: '/logout', method: 'post'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function AuthenticatedLayout({children}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div>
                <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                    />

                    <div className="fixed inset-0 flex">
                        <DialogPanel
                            transition
                            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                        >
                            <TransitionChild>
                                <div
                                    className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                                    <button type="button" onClick={() => setSidebarOpen(false)}
                                            className="-m-2.5 p-2.5">
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon aria-hidden="true" className="size-6 text-white"/>
                                    </button>
                                </div>
                            </TransitionChild>
                            {/* Sidebar component, swap this element with another sidebar if you like */}
                            <div
                                className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                                <div className="flex h-16 shrink-0 items-center">
                                    <img
                                        alt="Your Company"
                                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                                        className="h-8 w-auto"
                                    />
                                </div>
                                <nav className="flex flex-1 flex-col">
                                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" className="-mx-2 space-y-1">
                                                {navigation.map((item) => (
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current
                                                                    ? 'bg-gray-800 text-white'
                                                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                            )}
                                                        >
                                                            <item.icon aria-hidden="true" className="size-6 shrink-0"/>
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li>
                                            <ul role="list" className="-mx-2 space-y-1">
                                                {extra.map((item) => (
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current
                                                                    ? 'bg-gray-800 text-white'
                                                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                            )}
                                                        >
                                                            <item.icon aria-hidden="true" className="size-6 shrink-0"/>
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>

                                        </li>
                                        <li className="mt-auto">
                                        <a
                                                href="#"
                                                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
                                            >
                                                <Cog6ToothIcon aria-hidden="true" className="size-6 shrink-0"/>
                                                Settings
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
                            />
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-3">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-800 text-white'
                                                            : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                    )}
                                                >
                                                    <item.icon aria-hidden="true" className="size-6 shrink-0"/>
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                    <div className="text-xs/6 font-semibold text-gray-400 mt-4">Extras</div>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {extra.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    target={item.target}
                                                    rel="noopener noreferrer"
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-800 text-white'
                                                            : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                    )}
                                                >
                                                    <item.icon aria-hidden="true" className="size-6 shrink-0"/>
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>


                                <li className="mt-auto">
                                    <a
                                        href="#"
                                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
                                    >
                                        <Cog6ToothIcon aria-hidden="true" className="size-6 shrink-0"/>
                                        Settings
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="lg:pl-72">
                    <div
                        className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-black px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                        <button type="button" onClick={() => setSidebarOpen(true)}
                                className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon aria-hidden="true" className="size-6"/>
                        </button>

                        {/* Separator */}
                        <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden"/>

                        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                            <form action="#" method="GET" className="relative flex flex-1">
                                <label htmlFor="search-field" className="sr-only">
                                    Search
                                </label>
                                <MagnifyingGlassIcon
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                                />
                                <input
                                    id="search-field"
                                    name="search"
                                    type="search"
                                    placeholder="Search..."
                                    className="block size-full border-0 py-0 pl-8 pr-0 text-white bg-black placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                />
                            </form>
                            <div className="flex items-center gap-x-4 lg:gap-x-6">


                                {/* Profile dropdown */}
                                <Menu as="div" className="relative">
                                    <MenuButton className="-m-1.5 flex items-center p-1.5">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            alt=""
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            className="size-8 rounded-full bg-gray-50"
                                        />
                                        <span className="hidden lg:flex lg:items-center">
                      <span aria-hidden="true" className="ml-4 text-sm/6 font-semibold text-white">
                        Tom Cook
                      </span>
                      <ChevronDownIcon aria-hidden="true" className="ml-2 size-5 text-gray-400"/>
                    </span>
                                    </MenuButton>
                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-black py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        {userNavigation.map((item) => (
                                            <MenuItem key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    method={item.method}
                                                    className="block px-3 py-1 text-sm/6 text-white data-[focus]:bg-gray-800 data-[focus]:outline-none"
                                                >
                                                    {item.name}
                                                </Link>
                                            </MenuItem>
                                        ))}
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <main className="py-10">
                        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
                    </main>
                </div>
            </div>
        </>
    )
}
