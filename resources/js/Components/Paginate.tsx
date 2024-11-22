import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import {useState} from "react";


export default function Paginate(props: {}) {
    // hook for allowing arrows to change page numbers
    const [page, setPage] = useState(1); // by default we are on page one

    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const numericValue = parseInt(value, 10);

        if (isNaN(numericValue)) {
            setPage(numericValue);
        }
    }


    return (
        <div className="flex items-center justify-between bg-transparent px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-white">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                        <span className="font-medium">97</span> results
                    </p>
                </div>
                <div>
                    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            onClick={() => {
                                if (page > 1) {
                                    setPage(page - 1);
                                }
                            }}
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon aria-hidden="true" className="size-5" />
                        </a>
                        <p className="relative inline-flex items-center px-2 py-2 text-white ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0" onChange={handleInputChange}>{page}</p>
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            onClick={() => setPage(page + 1)}
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon aria-hidden="true" className="size-5" />
                        </a>
                    </nav>

                </div>
            </div>
        </div>
    )
}
