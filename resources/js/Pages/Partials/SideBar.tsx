import React from 'react';

export default function SideBar() {
    return (
        <div className="h-screen w-64 bg-transparent text-white flex flex-col justify-between rounded-md border border-white">
            {/* Logo Section */}
            <div className="p-4">
                <nav>
                    <ul className="space-y-2">
                        <li className="flex items-center justify-between p-2 rounded-lg hover:bg-transparent">
                            <div className="flex items-center gap-2">
                                <span>Dashboard</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-transparent">
                            <span>Team</span>
                        </li>
                        <li className="flex items-center justify-between p-2 rounded-lg hover:bg-transparent">
                            <div className="flex items-center gap-2">
                                <span>Projects</span>
                            </div>
                        </li>
                        <li className="flex items-center justify-between p-2 rounded-lg hover:bg-transparent">
                            <div className="flex items-center gap-2">
                                <span>Calendar</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-transparent">
                            <span>Documents</span>
                        </li>
                        <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-transparent">
                            <span>Reports</span>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};


