import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Inertia} from "@inertiajs/inertia";


export default function Create() {

    return (
        <>
            <AuthenticatedLayout>
                <form onSubmit={(e) => {
                    // do something...
                    const form_data = new FormData(e.target);


                    // chatgpt code just to ensure timezone is configured correctly against faker data
                    // Convert the `reveal_date` value to your custom UTC format
                    const localDatetime = form_data.get('reveal_date'); // Get the local datetime value
                    if (localDatetime) {
                        const utcDatetime = new Date(localDatetime);
                        // Format to 'YYYY-MM-DD HH:mm:ss'
                        const formattedDatetime = `${utcDatetime.getUTCFullYear()}-${String(
                            utcDatetime.getUTCMonth() + 1
                        ).padStart(2, '0')}-${String(utcDatetime.getUTCDate()).padStart(2, '0')} ${String(
                            utcDatetime.getUTCHours()
                        ).padStart(2, '0')}:${String(utcDatetime.getUTCMinutes()).padStart(2, '0')}:${String(
                            utcDatetime.getUTCSeconds()
                        ).padStart(2, '0')}`;
                        form_data.set('reveal_date', formattedDatetime); // Replace the value in the FormData object
                    }
                    Inertia.post('/predictions/submit', form_data)
                    console.log(form_data);
                    e.preventDefault()

                }}>
                    <div className="flex  justify-center min-h-screen bg-transparent">
                        <div className="flex flex-col space-y-4 p-6 bg-transparent rounded-xl shadow-lg w-full max-w-md">
                            <label className="text-white text-sm font-semibold">Title</label>
                            <input 
                                className="p-2 rounded-lg bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                                name="title"
                                placeholder="Enter title"
                            />

                            <label className="text-white text-sm font-semibold">Body</label>
                            <textarea 
                                className="p-2 rounded-lg bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                                name="body"
                                placeholder="Enter body"
                                rows="4"
                            ></textarea>

                            <label className="text-white text-sm font-semibold">Reveal at</label>
                            <input 
                                className="p-2 rounded-lg bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                                type="datetime-local"
                                name="reveal_date"
                            />

                            <button className="mt-4 bg-transparent text-white font-semibold py-2 rounded-lg hover:bg-black transition duration-500 border border-white">
                                Post
                            </button>
                        </div>
                    </div>

                </form>

            </AuthenticatedLayout>
        </>
    );
}
