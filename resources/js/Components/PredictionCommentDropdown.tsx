import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import {useState} from "react";

export default function PredictionCommentDropdown() {

    // add hook for default option
    const [selectedOption, setSelectedOption] = useState("Top");

    const handleSelection = (option : string) => {
        setSelectedOption(option);
    }

    return (
        <div className="flex inline-flex space-x-4">
            <p className="pt-1">Sort by:</p>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <MenuButton
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        {selectedOption}
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400"/>
                    </MenuButton>
                </div>

                <MenuItems
                    transition
                    className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <div className="py-1">
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                onClick={() => setSelectedOption("Top")}
                            >
                                Top
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                onClick={() => setSelectedOption("Controversial")}
                            >
                                Controversial
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                onClick={() => setSelectedOption("Oldest")}
                            >
                                Oldest
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                onClick={() => setSelectedOption("Newest")}
                            >
                                Newest
                            </a>
                        </MenuItem>
                    </div>
                </MenuItems>
            </Menu>
        </div>
    )

}
