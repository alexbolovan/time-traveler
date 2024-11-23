import React from 'react';

export default function SideBar() {
    return (
        <div className="h-screen w-64 bg-transparent text-white flex flex-col justify-between">
            {/* Logo Section */}
            <div className="p-4">
                <nav>
                    <ul className="space-y-2">
                        <div className="flex flex-col items-left pb-4">
                            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-transparent">
                                <div className="flex items-center gap-2 font-bold underline">
                                    <span>Explore</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-transparent">
                                <div className="flex items-center gap-2">
                                    <span>Home</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-transparent">
                                <span>Trending</span>
                            </li>
                            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-transparent">
                                <div className="flex items-center gap-2">
                                    <span>Top</span>
                                </div>
                            </li>
                        </div>
                        <div className="flex flex-col items-left pb-4">
                            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-transparent">
                                <div className="flex items-center gap-2 font-bold underline">
                                    <span>Recent</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-transparent">
                                <div className="flex items-center gap-2">
                                    <span>recent 1</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-transparent">
                                <div className="flex items-center gap-2">
                                    <span>recent 2</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-transparent">
                                <div className="flex items-center gap-2">
                                    <span>recent 3</span>
                                </div>
                            </li>
                        </div>
                        <div className="flex flex-col items-left pb-4">
                            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-transparent">
                                <div className="flex items-center gap-2 font-bold underline">
                                    <span>General</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-transparent">
                                <div className="flex items-center gap-2">
                                    <span>Help</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-transparent">
                                <div className="flex items-center gap-2">
                                    <span>Report Bug</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-transparent">
                                <div className="flex items-center gap-2">
                                    <span>Github</span>
                                </div>
                            </li>


                        </div>

                    </ul>

                </nav>
            </div>

        </div>
    )
        ;
};


