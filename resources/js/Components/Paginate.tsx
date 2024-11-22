import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { Inertia } from "@inertiajs/inertia";

export default function Paginate({ currentPage, lastPage, links }: { currentPage: number; lastPage: number; links: any[] }) {
    const [page, setPage] = useState(currentPage);

    const goToPage = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= lastPage) {
            setPage(pageNumber);
            Inertia.get(`/predictions?page=${pageNumber}`);
        }
    };

    return (
        <div className="flex items-center justify-between bg-transparent px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-white">
                        Showing page <span className="font-medium">{currentPage}</span> of{' '}
                        <span className="font-medium">{lastPage}</span>
                    </p>
                </div>
                <div>
                    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                        {/* Previous Button */}
                        <button
                            onClick={() => goToPage(page - 1)}
                            disabled={currentPage === 1}
                            className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-white ring-1 ring-inset ring-gray-300 ${
                                currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-50 focus:z-20'
                            }`}
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon aria-hidden="true" className="size-5" />
                        </button>

                        {/* Current Page */}
                        <span className="relative inline-flex items-center px-4 py-2 text-white ring-1 ring-inset ring-gray-300">
                            {currentPage}
                        </span>

                        {/* Next Button */}
                        <button
                            onClick={() => goToPage(page + 1)}
                            disabled={currentPage === lastPage}
                            className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-white ring-1 ring-inset ring-gray-300 ${
                                currentPage === lastPage ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-50 focus:z-20'
                            }`}
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon aria-hidden="true" className="size-5" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}
